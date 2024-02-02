import { writeFile } from 'fs/promises';
import path from 'path';

export const imageUpload = async (image:File, filePath:string,filename) => {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    // console.log(filename);
    writeFile(
      path.join(process.cwd(), `${filePath}${filename}`),
      buffer,
    );
    // console.log('Done', filename);
  } catch (err) {
    console.log(err);
  }
};
