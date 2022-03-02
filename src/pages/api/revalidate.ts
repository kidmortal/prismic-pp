import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../services/prismic";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let secret = req.body.secret;
  if (secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  let docId = req.body?.documents?.[0];
  if (!docId) return res.status(401).json({ message: "Invalid Dcoument" });
  const doc = await Client().getByID(docId, {});
  if (!doc) return res.status(401).json({ message: "No docs found" });

  try {
    await res.unstable_revalidate(`/${doc.uid}`);
    return res.json({ revalidated: true, route: `/${doc.uid}` });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
