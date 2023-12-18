import { GroupedTicket } from "@/types";
import { type ClassValue, clsx } from "clsx";
import type { Ticket, OrderBy } from "@/types";
import { twMerge } from "tailwind-merge";
import { groupBy as _groupBy } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupTickets(tickets: Ticket[], groupBy: OrderBy) {
  const groupedTicketsData = _groupBy(
    tickets,
    (ticket: Ticket) => ticket[groupBy]
  );

  const transformedData: GroupedTicket[] = [];

  for (const groupBy in groupedTicketsData) {
    if (Object.prototype.hasOwnProperty.call(groupedTicketsData, groupBy)) {
      transformedData.push({
        type: "header",
        groupHeader: groupBy,
        count: groupedTicketsData[groupBy].length,
      });

      for (const issue of groupedTicketsData[groupBy]) {
        transformedData.push({ type: "issue", issue: issue as Ticket });
      }
    }
  }

  return transformedData;
}
