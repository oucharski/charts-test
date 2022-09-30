export type StackedAreaChartDefinition = {
  name: string;
  lineStyle: { width: number };
  colors: {
    light: string;
    dark: string;
  };
  data: number[];
};

export type StackedAreaChartProps = {
  chartTitle?: string;
  definitions: StackedAreaChartDefinition[];
  xAxisLabels: string[];
};
