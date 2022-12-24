import { Box } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "dez/21",
  "jan/22",
  "fev/22",
  "mar/22",
  "abr/22",
  "mai/22",
  "jun/22",
  "jul/22",
  "ago/22",
  "set/22",
  "out/22",
  "nov/22",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Meta",
      data: [
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
        "7500",
      ],
      borderColor: "#D53B31",
      backgroundColor: "#D53B31",
    },
    {
      fill: true,
      label: "Sem CNS/CPF",
      data: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      borderColor: "#F68C2D",
      backgroundColor: "#FDDAAF",
    },
    {
      fill: true,
      label: "Com CNS/CPF",
      data: [
        "2000",
        "2300",
        "3000",
        "4300",
        "4500",
        "3400",
        "3200",
        "5000",
        "3000",
        "3240",
        "3100",
        "0",
      ],
      borderColor: "#4097E3",
      backgroundColor: "#E6F3FC",
    },

    {
      fill: true,
      label: "Total",
      data: [
        "2000",
        "2300",
        "3000",
        "4300",
        "4500",
        "3400",
        "3200",
        "5000",
        "3000",
        "3240",
        "3100",
        "0",
      ],
      borderColor: "#8A8A8A",
      backgroundColor: "#DFDFDF",
    },
  ],
};
export default function GraphAreaEnfermeiro() {
  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
}
