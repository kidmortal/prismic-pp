export default async function exitPreview(_: any, res: any) {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
}
