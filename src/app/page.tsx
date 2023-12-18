"use client";

import { useEffect, useRef, useState } from "react";
import { useAllTickets } from "@/api/tickets";
import TicketList from "@/components/ticket-list";
import TicketListSkeleton from "@/components/ticket-list-skeleton";
import Header from "@/components/header";
import { OrderBy, GroupedTicket } from "@/types";
import { useTicketsByOrder } from "@/api/tickets";
import { db } from "@/db";
import { groupTickets } from "@/lib/utils";

export default function Home() {
  const [isDBSynced, setIsDBSynced] = useState(true);
  const [orderBy, setOrderBy] = useState<OrderBy>("status");
  const [tickets, setTickets] = useState<GroupedTicket[]>([]);
  const { data: fetchedTickets, isPending } = useAllTickets(!isDBSynced);
  const workerRef = useRef<Worker>();
  const {
    status,
    data: storedTickets,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useTicketsByOrder(orderBy, isDBSynced);

  // checks if the DB is in sync with bootstrap data
  useEffect(() => {
    db.sync.get("syncInfo").then((syncInfo) => {
      const isDBSynced = syncInfo?.synced!;
      setIsDBSynced(isDBSynced);
    });
  }, []);

  // creates a worker to sync the DB with bootstrap data
  useEffect(() => {
    workerRef.current = new Worker(new URL("../dbWorker.ts", import.meta.url));

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  // sends the bootstrap data to the worker
  useEffect(() => {
    if (!isPending) {
      workerRef.current?.postMessage(fetchedTickets);

      setTickets(groupTickets(fetchedTickets?.flat(), orderBy));
    }
  }, [fetchedTickets, isPending, orderBy]);

  // syncs the UI with the data from DB
  useEffect(() => {
    if (storedTickets !== undefined) {
      setTickets(groupTickets(storedTickets, orderBy));
    }
  }, [storedTickets, orderBy, isDBSynced]);

  if ((isPending && !isDBSynced) || storedTickets === undefined) {
    return <TicketListSkeleton />;
  }

  if (status === "error") {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col">
      <Header orderBy={orderBy} onGroupByChange={setOrderBy} />
      <TicketList
        tickets={tickets}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isFetchingPreviousPage={isFetchingPreviousPage}
        fetchNextPage={fetchNextPage}
        fetchPreviousPage={fetchPreviousPage}
      />
    </div>
  );
}
