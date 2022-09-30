import { Box } from "@mui/material";
import { useState } from "react";
import { ColorPicker } from "../../ColorPicker";
import { defaults } from "./defaults";
import { ChartToobarProps, ChartToobarOrientation } from "./types";
import { styles } from "./styles";

export const ChartToolbar = (props: ChartToobarProps) => {
  const [color, setColor] = useState<string>(defaults.color);
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);
  const orientation = props.orientation || defaults.orientation;

  let style = {};

  const onChangeColor = (color: any) => {
    setColor(color);
  };

  switch (orientation) {
    case ChartToobarOrientation.horizontal:
      style = { ...styles.horizontal, backgroundColor: color };
      break;
    case ChartToobarOrientation.vertical:
      style = { ...styles.vertical, backgroundColor: color };
      break;

    default:
      return null;
  }

  return (
    <Box sx={style}>
      <ColorPicker
        open={colorPickerOpen}
        setOpen={setColorPickerOpen}
        color={color}
        onChange={onChangeColor}
      />
    </Box>
  );
};
