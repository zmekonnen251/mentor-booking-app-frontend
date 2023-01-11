import Compress from "compress.js";

export default async (img) => {
  const compress = new Compress();
  const compressedFile = await compress.compress([img], {
    quality: 0.5,
    maxWidth: 500,
    maxHeight: 500,
  });
  return compressedFile[0];
};
