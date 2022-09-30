import { Box } from "@mui/material";
import { ChartToolbar } from "./ChartToolbar";
import { ChartToobarOrientation } from "./ChartToolbar/types";
import { ChartWrapperProps } from "./types";
import { styles } from "./styles";

export const ChartWrapper = (props: ChartWrapperProps) => {
  return (
    <Box style={styles.container}>
      <ChartToolbar orientation={ChartToobarOrientation.horizontal} />
      {props.children}
    </Box>
  );
};
