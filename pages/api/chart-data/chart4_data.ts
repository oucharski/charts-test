let discarge = [
  55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
  74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
];
let head = [
  234.109, 232.712, 231.244, 229.7, 228.078, 226.383, 224.62, 222.8, 220.935,
  219.022, 217.037, 214.951, 212.772, 210.579, 208.462, 206.433, 204.398,
  202.254, 199.982, 197.66, 195.369, 193.141, 190.99, 188.905, 186.844, 184.76,
  182.621, 180.428, 178.189, 175.911, 173.598, 171.257, 168.895, 166.519,
];

let power = [
  215.135, 216.623, 218.071, 219.477, 220.843, 222.189, 223.544, 224.918,
  226.332, 227.806, 229.229, 230.521, 231.757, 232.951, 234.191, 235.491,
  236.729, 237.777, 238.619, 239.361, 240.122, 240.931, 241.787, 242.675,
  243.551, 244.368, 245.091, 245.712, 246.227, 246.639, 246.964, 247.223,
  247.444, 247.659,
];

let gateOpening = [
  19.549, 20.292, 21.062, 21.794, 22.439, 23.035, 23.594, 24.118, 24.596,
  24.998, 25.346, 25.671, 25.988, 26.304, 26.627, 26.972, 27.374, 27.874,
  28.449, 29.082, 29.753, 30.436, 31.086, 31.669, 32.19, 32.66, 33.094, 33.499,
  33.882, 34.248, 34.602, 34.95, 35.293, 35.633,
];

let efficiency = [
  58.35, 58.65, 58.927, 59.179, 59.405, 59.599, 59.756, 59.876, 59.955, 59.989,
  59.999, 59.999, 59.969, 59.928, 59.879, 59.824, 59.766, 59.707, 59.646,
  59.575, 59.492, 59.397, 59.298, 59.195, 59.086, 58.969, 58.841, 58.703,
  58.559, 58.409, 58.251, 58.08, 57.893, 57.685,
];

let npshIncipient = [
  77.303, 70.833, 65.119, 60.18, 56.075, 52.878, 50.586, 49.0, 47.88, 47.035,
  46.39, 45.922, 45.61, 45.44, 45.397, 45.442, 45.515, 45.594, 45.74, 46.038,
  46.592, 47.51, 48.928, 51.042, 54.14, 58.579, 64.444, 71.529, 79.268, 86.799,
  93.245, 98.19, 102.098, 105.484,
];

let weightedEfficiency = [
  [82.73, 58.6, 0.1, "I"],
  [81.29, 58.8, 0, "1"],
  [79.69, 59.01, 0.2, "II"],
  [77.47, 59.25, 0, "2"],
  [75.03, 59.49, 0.2, "III"],
  [72.99, 59.65, 0, "3"],
  [70.59, 59.79, 0.2, "IV"],
  [68.27, 59.92, 0, "4"],
  [65.9, 60.0, 0.2, "V"],
  [63.49, 59.98, 0, "5"],
  [60.72, 59.72, 0.1, "VI"],
];

function createXYCoordinates(xCoord: any, yCoord: any) {
  let result = new Array();

  for (let index = 0; index < xCoord.length; index++) {
    if (yCoord.length <= index) {
      throw new Error("yCoord must have the same length as xCoord");
    }

    result[index] = new Array(xCoord[index], yCoord[index]);
  }

  return result;
}

let min = 55;
let max = 88;
let interval = 1;

export const option = {
  grid: {
    left: "60px",
    right: "120px",
    containLabel: true,
  },
  toolbox: {
    feature: {
      dataZoom: {},
      restore: {},
      saveAsImage: {},
    },
  },
  legend: {
    data: [
      "Head",
      "Power",
      "Gate Opening",
      "Efficiency",
      "NPSH Incipient",
      "Weighted Efficiency",
      "Limiting Points",
      "Stability Point",
    ],
    width: "50%",
  },
  title: {
    text: "First Diagramm",
  },
  tooltip: {},
  xAxis: {
    type: "value",
    nameLocation: "middle",
    min: min,
    max: max,
    interval: interval,
    name: "Q [m³/s]",
    data: discarge,
  },
  yAxis: [
    {
      name: "H [m]",
      position: "right",
      min: 140,
      max: 240,
      interval: 10,
    },
    {
      name: "P [MW]",
      position: "right",
      offset: 60,
      min: 205,
      max: 255,
      interval: 5,
    },
    {
      name: "ɑ [°]",
      position: "right",
      offset: 120,
      min: 19,
      max: 39,
      interval: 1,
    },
    {
      name: "η [%]",
      position: "left",
      min: 55.5,
      max: 60.5,
      interval: 0.5,
    },
    {
      name: "NPSH [m]",
      position: "left",
      offset: 60,
      min: 40,
      max: 140,
      interval: 10,
    },
  ],
  itemStyle: {},
  series: [
    {
      name: "Head",
      type: "line",
      yAxisIndex: 0,
      symbol: "none",
      data: createXYCoordinates(discarge, head),
    },
    {
      name: "Power",
      type: "line",
      yAxisIndex: 1,
      symbol: "none",
      data: createXYCoordinates(discarge, power),
    },
    {
      name: "Gate Opening",
      type: "line",
      yAxisIndex: 2,
      symbol: "none",
      data: createXYCoordinates(discarge, gateOpening),
    },
    {
      name: "Efficiency",
      type: "line",
      yAxisIndex: 3,
      symbol: "none",
      data: createXYCoordinates(discarge, efficiency),
    },
    {
      name: "NPSH Incipient",
      type: "line",
      yAxisIndex: 4,
      symbol: "none",
      data: createXYCoordinates(discarge, npshIncipient),
    },
    {
      name: "Weighted Efficiency",
      type: "scatter",
      yAxisIndex: 3,
      symbol: "diamond",
      z: 6,
      data: weightedEfficiency,
      symbolSize: function (data: any) {
        return data[2] * 100;
      },
      label: {
        show: true,
        position: "top",
        formatter: "{@[3]}",
      },
    },
    {
      name: "Limiting Points",
      type: "scatter",
      yAxisIndex: 0,
      symbol: "circle",
      z: 7,
      data: [
        [60.52, 225.48],
        [84.32, 175.17],
        [80.44, 183.83],
        [79.49, 185.93],
        [60.43, 229.95],
        [65.62, 215.76],
        [86.65, 169.72],
      ],
    },
    {
      name: "Stability Point",
      type: "scatter",
      yAxisIndex: 0,
      symbol: "circle",
      z: 8,
      data: [[57.8, 230.01]],
    },
  ],
};
