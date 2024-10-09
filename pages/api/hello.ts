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
  console.log("given enough eyeballs, all bugs are shallow");
  console.log("line 2");
  console.log("line 3");
  res.status(200).json({ success: true });
  return;
}

export default handler;
