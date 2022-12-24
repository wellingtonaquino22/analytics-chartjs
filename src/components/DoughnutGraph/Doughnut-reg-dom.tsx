import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [100, 0],
      
      backgroundColor: ["#ffff", "#DCDCDC"],
      borderColor: ["#ffff", "#DCDCDC"],
      borderWidth: 1,
    },
  ],
};
export default function DoughnutGraphRegDom(){
  return (
    <Box>
      <Doughnut data={data} />
    </Box>
  );
}