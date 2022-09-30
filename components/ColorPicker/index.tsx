import { Modal, Box, Button } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { styles } from "./styles";

export const ColorPicker = (props: any) => {
  // Here we define a state, and a setter for the state
  const [stateColor, setStateColor] = useState<any>(props.color);
  const { open, setOpen, onChange } = props;

  const handleOnChange = (args: any) => {
    const newColor = args.hex;
    setStateColor(newColor);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onOkClick = (args: any) => {
    onChange(stateColor);
    setOpen(false);
  };

  const onCancelClick = (args: any) => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ColorLensIcon />}
        onClick={handleOpen}
      />
      <Modal open={open}>
        <Box sx={styles.container}>
          <SketchPicker color={stateColor} onChange={handleOnChange} />
          <Box style={styles.footer}>
            <Button
              size="small"
              variant="text"
              color="error"
              onClick={onCancelClick}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="text"
              color="primary"
              onClick={onOkClick}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
