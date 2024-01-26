import APIService from "../services/APIService";
import { useQuery } from "@tanstack/react-query";

function Banner(props: { userId: number }) {
  const { userId } = props;

  const query = useQuery({
    queryKey: ["users", userId],
    queryFn: () => APIService.getUserInfo(userId),
    staleTime: 1000 * 60 * 5, //5 Minutes stale time
  });

  if (query.isLoading) {
    return <div className="p-5">Chargement...</div>;
  } else {
    console.log(query.data.data);
    return (
      <div className="flex flex-col p-5">
        <h1 className="text-4xl font-semibold">
          Bonjour{" "}
          <span className="text-primary">
            {query.data.data.userInfos.firstName}
          </span>
        </h1>
        <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      </div>
    );
  }
}

export default Banner;
