import useAPI from "./useAPI";
import { useQuery } from "@tanstack/react-query";

function useUserInfo() {
  const api = useAPI();

  const query = useQuery({
    queryKey: ["users", api.userId],
    queryFn: () => api.getUserInfo(),
    staleTime: 1000 * 60 * 5, //5 Minutes stale time
  });

  return query;
}
function useUserActivity() {
  const api = useAPI();

  const query = useQuery({
    queryKey: ["activity", api.userId],
    queryFn: () => api.getUserActivity(),
    staleTime: 1000 * 60 * 5, //5 Minutes stale time
  });

  return query;
}
function useUserAverageSessions() {
  const api = useAPI();

  const query = useQuery({
    queryKey: ["average-sessions", api.userId],
    queryFn: () => api.getUserAverageSessions(),
    staleTime: 1000 * 60 * 5, //5 Minutes stale time
  });

  return query;
}
export { useUserActivity, useUserAverageSessions };
export default useUserInfo;
