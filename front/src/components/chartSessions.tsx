import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useUserAverageSessions } from "../hooks/useUser";
import ChartData from "../utils/ChartData";

function ChartSessions() {
  const queryUserSession = useUserAverageSessions();

  //TODO: USE MEMO
  let data = [];
  if (queryUserSession.data !== undefined) {
    data = ChartData.formatLineChartData(queryUserSession.data.data.sessions);
  }

  if (queryUserSession.isLoading) {
    return <div className="p-5">Chargement...</div>;
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="p-2 bg-white shadow-lg">
          <p className="text-xs font-bold text-black">{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative flex rounded w-100 aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ bottom: 10, left: 10, right: 10 }}
          style={{ backgroundColor: "#FF0000", borderRadius: 5 }}>
          <CartesianGrid
            strokeDasharray="0 0"
            horizontal={false}
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{
              fill: "rgba(255,255,255,0.6)",
              fontSize: "14px",
            }}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+80"]} />
          <Tooltip
            content={<CustomTooltip payload={data} />}
            animationEasing="ease-out"
            offset={1}
            wrapperStyle={{ outline: "none" }}
            cursor={false}
            //position={{ x: 0 }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
      <span className="absolute opacity-60 top-[10%] left-[10%] text-white text-sm">
        Durée moyenne des
        <br />
        sessions
      </span>
    </div>
  );
}

export default ChartSessions;
