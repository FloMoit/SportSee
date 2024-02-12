import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useUserPerformance } from "../hooks/useUser";

function ChartPerf() {
  const queryUserPerf = useUserPerformance();

  //TODO: USE MEMO
  let data = [];
  if (queryUserPerf.data !== undefined) {
    for (let item of queryUserPerf.data.data.data) {
      data.push({
        subject: queryUserPerf.data.data.kind[item.kind],
        value: item.value,
      });
    }
  }

  if (queryUserPerf.isLoading) {
    return <div className="p-5">Chargement...</div>;
  }

  return (
    <div className="flex rounded w-100 aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data}
          className="bg-[#282D30] rounded">
          <PolarGrid stroke="#fff" strokeWidth={2} radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#fff"
            fontSize={12}
            strokeWidth={2}
            tickLine={false}
          />
          <Radar
            dataKey={"value"}
            fill="#FF0101"
            stroke="#FF0101"
            opacity="70%"
          />
          <Tooltip
            separator=""
            labelFormatter={() => ""}
            formatter={(value) => [value, ""]}
            contentStyle={{ backgroundColor: "#FF0101" }}
            itemStyle={{ color: "#fff" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPerf;
