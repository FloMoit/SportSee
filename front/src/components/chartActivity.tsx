import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { useUserActivity } from "../hooks/useUser";
import ChartData from "../utils/ChartData";

function ChartActivity() {
  const queryUserActivity = useUserActivity();

  // TODO:USE MEMO
  let data = [];
  if (queryUserActivity.data !== undefined) {
    data = ChartData.formatBarChartData(queryUserActivity.data.data);
    console.log(data);
  }
  if (queryUserActivity.isLoading) {
    return <div className="p-5">Chargement...</div>;
  }

  const renderTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="bg-[#FF0000] p-1">
          <p className="p-2 text-xs text-white ">{payload[0].value}kg</p>
          <p className="p-2 text-xs text-white ">{payload[1].value}kCal</p>
        </div>
      );
    }
  };
  const renderCustomAxisTick = ({ payload, x, y }) => {
    return (
      <text fill="#9B9EAC" x={x - 5} y={y + 15}>
        {payload.index + 1}
      </text>
    );
  };

  return (
    <div className="flex p-5 bg-gray-100 rounded w-100 aspect-[13/5] relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 100,
            right: 0,
            left: -20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" tick={renderCustomAxisTick} stroke="#DEDEDE" />
          <YAxis
            yAxisId="right"
            stroke="#9B9EAC"
            orientation="right"
            domain={["dataMin-1", "dataMax+1"]}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="left"
            dataKey="calories"
            tickLine={false}
            axisLine={false}
            hide={true}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            iconSize="8"
            iconType="circle"
            width={400}
            wrapperStyle={{
              top: 0,
              right: -10,
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <Bar
            dataKey="poids"
            yAxisId="right"
            name="Poids (kg)"
            fill="#000000"
            barSize={7}
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill="#000000" />}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            barSize={7}
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill="#E60000" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <span className="absolute top-[30px] left-[30px] text-sm font-semibold">
        Activité quotidienne
      </span>
    </div>
  );
}

export default ChartActivity;
