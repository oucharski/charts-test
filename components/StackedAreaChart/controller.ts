import * as echarts from "echarts";
import { StackedAreaChartProps } from "./types";
import { settings } from "./settings";

const getOptions = (args: StackedAreaChartProps) => {
  const { definitions, xAxisLabels, chartTitle } = args;

  const generateGradient = (initialColor: string, endingColor: string) => {
    const colors = [
      { offset: 0, color: initialColor },
      { offset: 1, color: endingColor },
    ];

    return new echarts.graphic.LinearGradient(0, 0, 0, 1, colors);
  };

  const series = definitions.map((def) => ({
    name: def.name,
    type: "line",
    stack: "Total",
    smooth: true,
    lineStyle: def.lineStyle,
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: generateGradient(def.colors.light, def.colors.dark),
    },
    emphasis: {
      focus: "series",
    },
    data: def.data,
  }));

  return {
    color: definitions.map((def) => def.colors.light),
    legend: {
      data: definitions.map((def) => def.name),
    },
    title: {
      text: chartTitle,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: xAxisLabels,
      },
    ],
    series: series,
    ...settings,
  };
};

export const controller = { getOptions };
