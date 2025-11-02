import { writeFile, mkdir, rename, unlink } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";

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

export const renameFile = async (oldPath, newPath) => {  
  await rename(oldPath, newPath);  
}

export const removeFile = async (filepath) => {
  await unlink(filepath);
}

export const copyFile = (sourcePath, targetDir) => {
  return new Promise((resolve, reject) => {
    const filename = sourcePath.split('/').pop();
    const targetPath = join(targetDir, filename);

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(targetPath);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    writeStream.on('finish', resolve);

    readStream.pipe(writeStream);
  });
};