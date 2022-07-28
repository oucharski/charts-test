// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { existingCharts } from "./existingCharts";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const chartName = req.query["chart-name"];
  const chart = existingCharts.find((chart) => chart.name === chartName);

  if (chart) {
    res.status(200).json(chart.data);
  } else {
    res.status(404).json({ error: "Couldn't find chart" });
  }
}
