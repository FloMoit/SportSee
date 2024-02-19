import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useUserPerformance } from "../hooks/useUser";
import ChartData from "../utils/ChartData";

function ChartPerf() {
  const queryUserPerf = useUserPerformance();

  const data = ChartData.formatRadarData(queryUserPerf.data?.data);

  if (queryUserPerf.isLoading) {
    return <></>;
  }
  if (queryUserPerf.isError) {
    return <></>;
  }

  const renderCustomAxisTick = ({ cx, cy, radius, payload, index }) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * index) / data.length;
    const offset = 10; // Distance pour éloigner les légendes des axes

    const xAdjusted = cx + Math.cos(angle) * (radius + offset);
    const yAdjusted = cy + Math.sin(angle) * (radius + offset);

    // Déterminer le textAnchor basé sur l'index pour centrer spécifiquement les légendes du haut et du bas
    let textAnchor = "middle";
    if (index !== 0 && index !== data.length / 2) {
      textAnchor = xAdjusted > cx ? "start" : "end";
    }

    return (
      <text
        x={xAdjusted}
        y={yAdjusted}
        fill="#fff"
        className="text-[10px] font-semibold"
        textAnchor={textAnchor}
        dominantBaseline="central">
        {capitalizeFirstLetter(payload.value)}
      </text>
    );
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex rounded w-100 aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          outerRadius="80%"
          data={data}
          className="bg-[#282D30] rounded">
          <PolarGrid stroke="#fff" strokeWidth={1} radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            radius={150}
            fontSize={12}
            strokeWidth={1}
            tickLine={false}
            tick={renderCustomAxisTick}
          />
          <Radar
            dataKey={"value"}
            fill="#FF0000"
            stroke="#FF0000"
            opacity="70%"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPerf;
