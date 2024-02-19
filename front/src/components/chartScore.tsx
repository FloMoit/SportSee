import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { useUserInfo } from "../hooks/useUser";
import ChartData from "../utils/ChartData";

function ChartScore() {
  const queryUserInfo = useUserInfo();

  const data = ChartData.formatRadialData(queryUserInfo.data?.data);

  if (queryUserInfo.isLoading) {
    return <></>;
  }
  if (queryUserInfo.isError) {
    return <></>;
  }

  const customLegend = ({ payload }) => {
    return (
      <div className="w-min">
        <div className="p-1 text-lg font-bold text-center">
          {payload[0].payload.value}%
        </div>
        <div className="text-xs text-[#74798C] text-center">
          de&nbsp;votre objectif
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex bg-gray-100 rounded w-100 aspect-square">
      <span className="absolute top-[5%] left-[5%]">Score</span>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={205}
          endAngle={-160}
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="83%"
          barSize={100}
          data={data}>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            cornerRadius={20}
            clockWise
            angleAxisId={0}
            dataKey="value"
          />
          <Legend
            content={customLegend}
            layout="vertical"
            verticalAlign="middle"
          />
          <svg className="absolute top-0 left-0 z-0 w-full h-full">
            <circle cx="50%" cy="50%" r="31%" fill="#fff" />
          </svg>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartScore;
