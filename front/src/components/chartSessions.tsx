import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUserAverageSessions } from "../hooks/useUser";

function ChartSessions() {
  const queryUserSession = useUserAverageSessions();

  //TODO: USE MEMO
  let data = [];
  let count = 1;
  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
  for (let item of queryUserSession.data.data.sessions) {
    data.push({
      name: count,
      sessionLength: item.sessionLength,
      day: weekDays[item.day - 1],
    });
    count++;
  }

  if (queryUserSession.isLoading) {
    return <div className="p-5">Chargement...</div>;
  }

  return (
    <div className="flex w-100 h-[320px] rounded">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ bottom: 10, left: 10, right: 10 }}
          style={{ backgroundColor: "#FF0000", borderRadius: 5 }}>
          <XAxis
            tickLine={false}
            axisLine={false}
            stroke="#fff"
            dataKey={"day"}
            dy={5}
            tick={{
              stroke: "#fff",
              opacity: 0.6,
              fontSize: 12,
            }}
          />
          <YAxis
            domain={["dataMin", "dataMax + 30"]}
            dataKey="sessionLength"
            hide
          />
          <Tooltip
            separator=" "
            labelFormatter={() => ""}
            formatter={(value) => ["min", String(value)]}
            wrapperStyle={{ pointerEvents: "none" }}
            contentStyle={{
              backgroundColor: "#fff",
              padding: "5px 10px",
              fontWeight: "bold",
              fontSize: "14px",
              border: "none",
            }}
            itemStyle={{ color: "#000" }}
          />
          <defs>
            <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#FF7070" stopOpacity={1} />
              <stop offset="95%" stopColor="#FDE6E6" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#colorLine)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white", fill: "white", r: 5 }}
          />
          <text
            x="30"
            y="30"
            opacity={0.6}
            textAnchor="start"
            dominantBaseline="hanging"
            fill="white">
            Durée moyenne des
          </text>
          <text
            x="30"
            y="50"
            textAnchor="start"
            opacity={0.6}
            dominantBaseline="hanging"
            fill="white">
            sessions
          </text>{" "}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSessions;
