import { writeFile, mkdir } from "node:fs/promises";
import { createReadStream } from "node:fs";

export const createFile = async (filename) => {
  await writeFile(filename, '')
};

export const createDirectory = async (dirname) => {
  await mkdir(dirname);
}

export const readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    const stream = createReadStream(filepath, { encoding: "utf8" });

    stream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    stream.on('end', resolve);
    stream.on('error', reject);
  });
};