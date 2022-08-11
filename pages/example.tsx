import Link from "next/link";
import type { NextPage } from "next";
import { Button, Grid, Typography } from "@mui/material";

const Example: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"h4"}>I am an example page</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="/nested/example">
          <Button variant={"outlined"}>I am a button</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Example;
