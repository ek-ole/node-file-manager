import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

export const getDirectoryList = async () => {
  try {
    console.log("Current directory:", process.cwd());
    const items = await readdir(process.cwd());
    console.log("Found items:", items);
    const itemsWithStats = await Promise.all(
      items.map(async (item) => {
        const itemPath = join(process.cwd(), item);
        const itemStat = await stat(itemPath);
        return {
          name: item,
          isDirectory: itemStat.isDirectory(),
        };
      })
    );

    itemsWithStats.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) return -1;
      if (!a.isDirectory && b.isDirectory) return 1;
      return a.name.localeCompare(b.name);
    });

    return itemsWithStats;
  } catch (error) {
    throw new Error(FAILED);
  }
};