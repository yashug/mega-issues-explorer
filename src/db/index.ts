import Dexie, { Table } from "dexie";
import type { Ticket } from "@/types";

/**
 * Represents a database for storing tickets.
 */
export class MyDB extends Dexie {
  tickets!: Table<Ticket, string>;
  sync!: Table<
    { name: string; totalCount: number; syncedCount: number; synced: boolean },
    string
  >;

  constructor() {
    super("TicketsDB");
    this.version(1).stores({
      tickets: "&id, status, priority, assignee, *labels",
      sync: "name",
    });

    this.initializeSyncTable();
  }

  private async initializeSyncTable() {
    const count = await this.sync.count();
    if (count === 0) {
      await this.sync.add({
        name: "syncInfo",
        totalCount: 0,
        syncedCount: 0,
        synced: false,
      }); // Initialize sync values if the table is empty
    }
  }
}

/**
 * An instance of the MyDB class representing the database.
 */
export const db = new MyDB();
