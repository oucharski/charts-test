import ReactEcharts from "echarts-for-react";
import { StackedAreaChartProps } from "./types";
import { controller } from "./controller";
import { ChartWrapper } from "../ChartWrapper";

export const StackedAreaChart = (props: StackedAreaChartProps) => {
  const option = controller.getOptions(props);

  return (
    <ChartWrapper>
      <ReactEcharts option={option} />
    </ChartWrapper>
  );
};
