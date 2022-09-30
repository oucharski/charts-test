export enum ChartToobarOrientation {
  "vertical" = "vertical",
  "horizontal" = "horizontal",
}

export type ChartToobarProps = {
  orientation?: ChartToobarOrientation;
  buttons?: any;
};
