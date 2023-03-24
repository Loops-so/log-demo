// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message?: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  if (!req.body.sleepTime || typeof req.body.sleepTime !== "number") {
    return res
      .status(400)
      .json({ success: false, message: "Please supply sleepTime as a number" });
  }
  const sleepTime = req.body.sleepTime;
  await new Promise((r) => setTimeout(r, sleepTime));
  console.log("given enough eyeballs, all bugs are shallow");
  res.status(200).json({ success: true });
  return;
}

export default handler;
