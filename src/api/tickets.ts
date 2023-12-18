import request from "./index";
import type { TicketList, Ticket, OrderBy } from "@/types";
import { useQueries, useInfiniteQuery } from "@tanstack/react-query";
import { db } from "@/db";

const BATCH_SIZE = 5000;

/**
 * Fetches a page of tickets from the server.
 * @param pageParam The page number to fetch.
 * @returns A promise that resolves to a TicketList object.
 */
const fetchTicketsByPage = (pageParam: number): Promise<TicketList> =>
  request({
    url: `/issues-${pageParam}.json`,
    headers: {},
  }).then((res) => res.data);

/**
 * Fetches a batch of tickets from the local database, ordered by a specified field.
 * @param pageParam The page number to fetch.
 * @param orderBy The field to order the tickets by.
 * @returns A promise that resolves to an array of Ticket objects.
 */
const fetchTicketsFromDB = ({
  pageParam,
}: {
  pageParam: number;
}): Promise<Ticket[]> => {
  const offset = pageParam * BATCH_SIZE;
  return db.tickets.offset(offset).limit(BATCH_SIZE).toArray();
};

/**
 * Custom hook to fetch all tickets from the server.
 * @returns An object containing the fetched ticket data and loading state.
 */
export const useAllTickets = (enabled: boolean = false) =>
  useQueries({
    queries: Array.from({ length: 10 }, (_, i) => ({
      queryKey: ["tickets", i + 1],
      queryFn: () => fetchTicketsByPage(i + 1),
      refetchOnWindowFocus: false,
      enabled,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data ? result.data.tickets : []),
        isPending: results.some((result) => result.isPending),
      };
    },
  });

/**
 * Custom hook to fetch tickets from the local database, ordered by a specified field.
 * @param orderBy The field to order the tickets by.
 * @param dataAvailableInDB A boolean indicating whether the ticket data is available in the local database.
 * @returns An object containing the fetched ticket data and pagination functions.
 */
export const useTicketsByOrder = (
  orderBy: OrderBy,
  dataAvailableInDB: boolean
) =>
  useInfiniteQuery({
    queryKey: ["tickets-by", orderBy],
    queryFn: fetchTicketsFromDB,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < BATCH_SIZE) return undefined;
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, lastPageParam) => {
      if (lastPageParam <= 0) return undefined;
      return lastPageParam - 1;
    },
    maxPages: 140,
    select: (data) => data.pages.flat(),
    enabled: dataAvailableInDB,
  });
