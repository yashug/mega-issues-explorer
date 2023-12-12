/**
 * This script is responsible for inserting a large batch of tickets into an IndexedDB database.
 * It receives an array of tickets as input and inserts them in batches using transactions.
 * After each batch is inserted, it sends a message to update the UI.
 */

import { db } from "@/db";

const BATCH_SIZE = 1000;

self.onmessage = async (e) => {
  const allTickets = e.data.flat();
  const totalRecords = allTickets.length;

  let currentIndex = 0;

  function insertNextBatch() {
    const endIndex = Math.min(currentIndex + BATCH_SIZE, totalRecords);
    const currentBatch = allTickets.slice(currentIndex, endIndex);

    if (currentBatch.length > 0) {
      db.transaction('rw', db.tickets, async () => {
        try {
          await db.tickets.bulkAdd(currentBatch); // Insert current batch into IndexedDB
        } catch (error) {
          // console.error('Error inserting batch:', error);
        }
        currentIndex += BATCH_SIZE;

        self.postMessage('update UI');

        if (currentIndex < totalRecords) {
          setTimeout(insertNextBatch, 0);
        }
      }).catch(error => {
        console.error('Error inserting batch:', error);
      });
    }
  }

  insertNextBatch();
};
