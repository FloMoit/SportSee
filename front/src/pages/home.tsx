import Banner from "../components/banner";
import Header from "../components/header";
import Menu from "../components/menu";
import ChartActivity from "../components/chartActivity";
import ChartSessions from "../components/chartSessions";
import ChartPerf from "../components/chartPerf";
import ChartScore from "../components/chartScore";
import KPICard from "../components/KPICard";

function Home(props) {
  const isError = props.isError || false;
  let content = <></>;

  if (isError) {
    content = (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Erreur</h1>
          <p>Cette adresse n'existe pas.</p>
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <Banner />
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-3/4 ">
            <div className="w-100">
              <ChartActivity />
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <div className="w-1/3">
                <ChartSessions />
              </div>
              <div className="w-1/3">
                <ChartPerf />
              </div>
              <div className="w-1/3">
                <ChartScore />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/4 h-full gap-3 xl:justify-start">
            <KPICard type="calories" />
            <KPICard type="proteines" />
            <KPICard type="glucides" />
            <KPICard type="lipides" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="flex flex-col h-screen">
        <Header />
        <div className="flex grow">
          <Menu />
          <div className="flex flex-col px-5 py-0 grow xl:px-32 xl:py-10">
            {content}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
