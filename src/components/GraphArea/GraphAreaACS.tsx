import { Box, Button } from "@chakra-ui/react";

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
  Chart,
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

function updateChart(){
async function fetchData(){
  const url = '/test.json'
  const response = await fetch(url);
  const data = await response.json()
  console.log(data)
  return data
};
fetchData().then(data =>{
  const mouth = data.finalreport[0].financials.map(
    function(index: any){
      return index.date;
    })
    console.log(mouth)
    config.data.labels = mouth;   
})
}


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
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
        "30000",
      ],
      borderColor: "#D53B31",
      backgroundColor: "#D53B31",
    },
    {
      fill: true,
      label: "Sem CNS/CPF",
      data: [
        "3000",
        "3200",
        "3400",
        "4000",
        "3000",
        "300",
        "200",
        "100",
        "200",
        "200",
        "0",
        "0",
      ],
      borderColor: "#F68C2D",
      backgroundColor: "#FDDAAF",
    },
    {
      fill: true,
      label: "Com CNS/CPF",
      data: [
        "25000",
        "22500",
        "25000",
        "40000",
        "35000",
        "39000",
        "34000",
        "30000",
        "31000",
        "41000",
        "25000",
        "0",
      ],
      borderColor: "#4097E3",
      backgroundColor: "#E6F3FC",
    },

    {
      fill: true,
      label: "Total",
      data: [
        "29000",
        "28500",
        "30000",
        "41000",
        "37000",
        "39000",
        "34200",
        "31000",
        "31200",
        "41000",
        "25000",
        "0",
      ],
      borderColor: "#8A8A8A",
      backgroundColor: "#DFDFDF",
    },
  ],
};

const config ={
  type: 'bar',
  data,
  options:{
    scales:{
      y:{
        beginAtZero: true,
      }
    }
  }
};

// const mychart = new Chart (config)

export default function GraphAreaACS() {
  return (
    <Box>
      <Line options={options} data={data}/>
      <Button onClick={updateChart}>teste</Button>
    </Box>
  );
}
