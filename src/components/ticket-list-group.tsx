import { upperFirst } from "lodash";

type TicketListGroupProps = {
  title: string;
  count: number;
};

export default function TicketListGroup({
  title,
  count,
}: TicketListGroupProps) {
  return (
    <div className="flex items-center h-11 bg-slate-100 px-9 gap-2 text-sm">
      <span>{upperFirst(title)}</span>
      <span className="text-slate-500">{count}</span>
    </div>
  );
}
