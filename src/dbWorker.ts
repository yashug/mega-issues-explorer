/**
 * This script is responsible for inserting a large batch of tickets into an IndexedDB database.
 * It receives an array of tickets as input and inserts them in batches using transactions.
 * After each batch is inserted, it sends a message to update the UI.
 */
import { db } from "./db";

const BATCH_SIZE = 10000;

self.onmessage = async (e) => {
  const allTickets = e.data.flat();
  const totalRecords = allTickets.length;

  // use dexie to insert tickets in batches
  let offset = 0;

  // update offset based on existing synced count
  const syncInfo = await db.sync.get("syncInfo");
  if (syncInfo) {
    console.log("from syncInfo", syncInfo);
    offset = syncInfo.syncedCount;
  }

  while (offset < totalRecords) {
    const batch = allTickets.slice(offset, offset + BATCH_SIZE);
    try {
      await db.tickets.bulkAdd(batch);
    } catch (err) {
      // console.log(err);
    }
    await db.sync.put({
      name: "syncInfo",
      totalCount: totalRecords,
      syncedCount: offset + BATCH_SIZE,
      synced: offset + BATCH_SIZE >= totalRecords,
    });
    offset += BATCH_SIZE;
  }
};
