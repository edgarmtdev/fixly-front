// import { useMemo } from "react";
// import dynamic from "next/dynamic";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [1365454.77, 965454.77, 1365454.77, 1665454.77, 1165454.77];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var misoptions = {
  scales: {
    x: {
      ticks: { color: "rgb(0, 0, 0)" },
    },
  },
};

const miData = {
  labels: meses,
  datasets: [
    {
      label: "Balance",
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(99, 211, 255)",
      pointRadius: 3,
      pointBorderColor: "rgb(48, 44, 45))",
      pointBackgroundColor: "rgb(99, 164, 255)",
    },
  ],
};

export default function Sales() {
  return (
    <div className="bg-white rounded p-6 relative h-[500px]">
      <Line data={miData} options={misoptions} />
    </div>
  );
}
