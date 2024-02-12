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

function ChartActivity() {
  const queryUserActivity = useUserActivity();

  // TODO:USE MEMO
  let data = [];
  let count = 1;
  if (queryUserActivity.data !== undefined) {
    for (let item of queryUserActivity.data.data.sessions) {
      data.push({
        name: count,
        poids: item.kilogram,
        calories: item.calories,
      });
      count++;
    }

    if (queryUserActivity.isLoading) {
      return <div className="p-5">Chargement...</div>;
    }

    return (
      <div className="flex w-100 h-[280px] p-5 bg-gray-100 rounded">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="2 2" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis dataKey="calories" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="poids"
              fill="#000000"
              barSize={7}
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#000000" />}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="#E60000" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ChartActivity;
