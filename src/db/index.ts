import Dexie, { Table } from "dexie";
import type { Ticket } from "@/types";

/**
 * Represents a database for storing tickets.
 */
export class MyDB extends Dexie {
  tickets!: Table<Ticket, string>;

  constructor() {
    super("TicketsDB");
    this.version(1).stores({
      tickets: "&id, status, priority, assignee, *labels",
    });
  }
}

/**
 * An instance of the MyDB class representing the database.
 */
export const db = new MyDB();
