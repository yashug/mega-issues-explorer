import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { Ticket } from "@/types";
import TicketItem from "./ticket-item";
import TicketListSkeleton from "./ticket-list-skeleton";

type TicketListProps = {
  tickets: Ticket[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFetchingNextPage: boolean;
  isFetchingPreviousPage: boolean;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
};

export default function TicketList({
  tickets,
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
  fetchNextPage,
  fetchPreviousPage,
}: TicketListProps) {
  const parentRef = useRef(null);
  const { ref: nextPageRef, inView: nextPageReady } = useInView({
    root: parentRef.current,
    threshold: 0,
  });
  const { ref: prevPageRef, inView: prevPageReady } = useInView({
    root: parentRef.current,
    threshold: 0,
  });

  if (nextPageReady) {
    hasNextPage && !isFetchingNextPage && fetchNextPage();
  }

  if (prevPageReady) {
    hasPreviousPage && !isFetchingPreviousPage && fetchPreviousPage();
  }

  const rowVirtualizer = useVirtualizer({
    count: tickets.length + (hasPreviousPage ? 1 : 0) + (hasNextPage ? 1 : 0),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 44,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: "100%",
        maxHeight: `calc(100vh - 56px)`,
        width: `100%`,
        overflow: "auto",
      }}
      className="flex-grow List"
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isNextLoaderRow =
            virtualRow.index === tickets.length && hasNextPage;
          const isPreviousLoaderRow = virtualRow.index === 0 && hasPreviousPage;
          const ticket = tickets[virtualRow.index - (hasPreviousPage ? 1 : 0)];

          return (
            <div
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isNextLoaderRow && (
                <div ref={nextPageRef}>
                  <TicketListSkeleton length={5} />
                </div>
              )}

              {isPreviousLoaderRow && (
                <div ref={prevPageRef}>
                  <TicketListSkeleton length={5} />
                </div>
              )}

              {!isNextLoaderRow && !isPreviousLoaderRow && ticket && (
                <TicketItem ticket={ticket} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
