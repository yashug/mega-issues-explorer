import type { Ticket } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PriorityIcon from "@/components/priority-icon";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import StatusIcon from "./status-icon";

type TicketItemProps = {
  ticket: Ticket;
};

export default function TicketItem({ ticket }: TicketItemProps) {
  const { priority, id, status, title, labels, assignee } = ticket;
  return (
    <div className="flex items-center w-full h-full gap-2 border-b-[0.5px] px-6 hover:bg-neutral-100 text-xs">
      <PriorityIcon priority={priority} />
      <span className="text-gray-500 min-w-[100px]">{id}</span>
      <StatusIcon status={status} />
      <span className="flex-1 truncate text-zinc-800 font-medium">
        {title}
      </span>
      <div className="hidden sm:flex gap-1">
        {labels.map((label, index) => (
          <Badge
            variant="outline"
            key={index}
            className="text-gray-500 h-7 hover:bg-neutral-100 bg-white font-normal hover:text-zinc-800"
            onClick={() => console.log("clicked")}
          >
            <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
            {label}
          </Badge>
        ))}
      </div>
      <Avatar className="h-4 w-4 text-[8px]">
        <AvatarFallback className="text-cyan-700 hover:bg-slate-800 hover:text-white">
          {assignee ? assignee[0].toUpperCase() : <Icons.NoAssignee />}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
