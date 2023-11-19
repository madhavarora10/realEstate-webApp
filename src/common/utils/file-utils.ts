const getAbsoluteFilePath = (filePath: string) => process.env.NEXT_PUBLIC_S3_BASE_URL + filePath;

export {
  getAbsoluteFilePath,
};
