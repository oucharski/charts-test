import { useState } from "react";
import type { NextPage } from "next";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import { SketchPicker } from "react-color";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialStateColors = {
  backgroundColor: "#fff",
  color: "#000",
};

const initialStateOpen = {
  backgroundColor: false,
  color: false,
};

type Colors = {
  backgroundColor: string;
  color: string;
};

type Open = {
  backgroundColor: boolean;
  color: boolean;
};

const Example: NextPage = () => {
  const [colors, setColors] = useState<Colors>(initialStateColors);
  const [open, setOpen] = useState<Open>(initialStateOpen);

  const onChange = (parameter: string) => (color: any) => {
    const newColor = color.hex;
    const previousColors = colors;
    const newColors = { ...previousColors, [parameter]: newColor };

    setColors(newColors);
  };

  const handleSetOpen = (parameter: string) => (state: boolean) => {
    const newState = state;
    const previousStates = open;
    const newStates = { ...previousStates, [parameter]: newState };

    setOpen(newStates);
  };

  return (
    <Grid container spacing={2} sx={colors}>
      <Grid item xs={12}>
        <Typography variant={"h4"}>
          I am an example page with nested routed
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button href={"/example"} variant={"outlined"}>
          Go To /example
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => handleSetOpen("backgroundColor")(true)}
          variant={"outlined"}
        >
          Choose background color
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => handleSetOpen("color")(true)}
          variant={"outlined"}
        >
          Choose font color
        </Button>
      </Grid>

      <Modal
        open={open.backgroundColor}
        onClose={() => handleSetOpen("backgroundColor")(false)}
      >
        <Box sx={style}>
          <SketchPicker
            color={colors.backgroundColor}
            onChange={onChange("backgroundColor")}
          />
        </Box>
      </Modal>

      <Modal open={open.color} onClose={() => handleSetOpen("color")(false)}>
        <Box sx={style}>
          <SketchPicker color={colors.color} onChange={onChange("color")} />
        </Box>
      </Modal>
    </Grid>
  );
};

export default Example;
