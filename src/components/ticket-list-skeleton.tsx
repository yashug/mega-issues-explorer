import { Skeleton } from "@/components/ui/skeleton";

export default function TicketListSkeleton({
  length = 30,
}: {
  length?: number;
}) {
  const renderedItems = Array.from({ length: length }, (_, i) => (
    <div
      key={i}
      className="grid gap-2 grid-cols-[1fr_5fr_3fr] h-11 items-center border-b-[0.5px] px-6"
    >
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
    </div>
  ));
  return renderedItems;
}
