import useSWR from "swr";
import type { NextPage } from "next";
import ErrorPage from "next/error";
import ReactEcharts from "echarts-for-react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Fade,
} from "@mui/material";
import { useState } from "react";
import { existingCharts } from "./api/chart-data/existingCharts";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

const Home: NextPage = () => {
  const [selectedChart, setSelectedChart] = useState<string>("chart1");
  const { data, error } = useSWR(`api/chart-data/${selectedChart}`, fetcher);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedChart(event.target.value as string);
  };

  if (error) {
    return <ErrorPage statusCode={error} />;
  }

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <Fade in={data}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"h4"}>SelectedChart: {selectedChart}</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="select-chart-label-id">Chart</InputLabel>
            <Select
              labelId="select-id-label"
              id="select-id"
              value={selectedChart}
              label="Chat"
              onChange={handleChange}
            >
              {existingCharts.map((chart) => (
                <MenuItem key={chart.name} value={chart.name}>
                  {chart.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <ReactEcharts key={selectedChart} option={data} />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Home;
