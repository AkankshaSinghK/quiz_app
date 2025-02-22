import { openDB } from "idb";

const dbPromise = openDB("QuizDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("quizHistory")) {
      db.createObjectStore("quizHistory", { keyPath: "id", autoIncrement: true });
    }
  },
});

export const saveAttempt = async (attempt) => {
  const db = await dbPromise;
  await db.add("quizHistory", attempt);
};

export const getAttempts = async () => {
  const db = await dbPromise;
  return await db.getAll("quizHistory");
};
