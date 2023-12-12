"use client";

import { useEffect, useRef, useState } from "react";
import { useAllTickets } from "@/api/tickets";
import TicketList from "@/components/ticket-list";
import TicketListSkeleton from "@/components/ticket-list-skeleton";
import Header from "@/components/header";
import { OrderBy } from "@/types";
import { useTicketsByOrder } from "@/api/tickets";

export default function Home() {
  const { data: fetchedTickets, isPending } = useAllTickets();
  const [orderBy, setOrderBy] = useState<OrderBy>("status");
  const [dataReady, setDataReady] = useState(true);
  const workerRef = useRef<Worker>();
  const {
    status,
    data: tickets,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useTicketsByOrder(orderBy, dataReady);

  useEffect(() => {
    workerRef.current = new Worker(new URL("../dbWorker.ts", import.meta.url));

    workerRef.current.onmessage = () => {
      setDataReady(true);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  useEffect(() => {
    if (!isPending) {
      workerRef.current?.postMessage(fetchedTickets);
    }
  }, [fetchedTickets, isPending]);

  if (status === "pending") {
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
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        isFetchingNextPage={isFetchingNextPage}
        isFetchingPreviousPage={isFetchingPreviousPage}
        fetchNextPage={fetchNextPage}
        fetchPreviousPage={fetchPreviousPage}
      />
    </div>
  );
}
