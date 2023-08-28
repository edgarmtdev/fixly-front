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

var beneficios = [136545.477, 36545.477, 1365.454, 166545.477, 116545.477];
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
    y: {
      min: 0,
    },
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
      backgroundColor: "rgba(99, 143, 255, 0.5)",
      pointRadius: 5,
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
