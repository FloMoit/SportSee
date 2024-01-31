import useUserInfo from "../hooks/useUser";

function Banner() {
  const query = useUserInfo();

  if (query.isLoading) {
    return <div className="p-5">Chargement...</div>;
  } else {
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
