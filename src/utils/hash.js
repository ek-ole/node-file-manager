import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

export const calculateHash = (filepath) => {
  return new Promise ((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filepath);

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      const result = hash.digest('hex');
      resolve(result);
    });

    stream.on('error', reject);
  });
};