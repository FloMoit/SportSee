import { useParams } from "react-router-dom";
import APIService from "../services/APIService";

function useAPI() {
  const { userId } = useParams();

  if (!userId) throw new Error("userId is required");
  const api = new APIService({ userId });
  return api;
}

export default useAPI;
