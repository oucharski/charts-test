import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { StackedAreaChart } from "../components/StackedAreaChart";

export const definitions = [
  {
    name: "Line 1",
    lineStyle: { width: 0 },
    colors: {
      light: "#80FFA5",
      dark: "rgb(1, 191, 236)",
    },
    data: [140, 232, 101, 264, 90, 340, 250],
  },
  {
    name: "Line 2",
    lineStyle: { width: 0 },
    colors: {
      light: "#00DDFF",
      dark: "rgb(77, 119, 255)",
    },
    data: [120, 282, 111, 234, 220, 340, 310],
  },
  {
    name: "Line 3",
    lineStyle: { width: 0 },
    colors: {
      light: "#37A2FF",
      dark: "rgb(116, 21, 219)",
    },
    data: [320, 132, 201, 334, 190, 130, 220],
  },
  {
    name: "Line 4",
    lineStyle: { width: 0 },
    colors: {
      light: "#FF0087",
      dark: "rgb(135, 0, 157)",
    },
    data: [220, 402, 231, 134, 190, 230, 120],
  },
  {
    name: "Line 5",
    lineStyle: { width: 0 },
    colors: {
      light: "#FFBF00",
      dark: "#e03e4c",
    },
    data: [220, 302, 181, 234, 210, 290, 150],
  },
];

export const xAxisLabels = ["Mon", "Die", "Mit", "Do", "Fre", "Sam", "Son"];

const Example2: NextPage = () => {
  const chartTitle = "Stacked Area Chart";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StackedAreaChart
          chartTitle={chartTitle}
          xAxisLabels={xAxisLabels}
          definitions={definitions}
        />
      </Grid>

      <Grid item xs={12}>
        <StackedAreaChart
          chartTitle={chartTitle}
          xAxisLabels={xAxisLabels}
          definitions={[definitions[0]]}
        />
      </Grid>

      <Grid item xs={12}>
        <StackedAreaChart
          chartTitle={chartTitle}
          xAxisLabels={xAxisLabels}
          definitions={[definitions[1]]}
        />
      </Grid>
    </Grid>
  );
};

export default Example2;
