import Banner from "../components/banner";
import Header from "../components/header";
import Menu from "../components/menu";
import ChartActivity from "../components/chartActivity";
import ChartSessions from "../components/chartSessions";
import ChartPerf from "../components/chartPerf";
import ChartScore from "../components/chartScore";
import KPICard from "../components/KPICard";

function Home() {
  return (
    <>
      <section className="flex flex-col h-screen">
        <Header />
        <div className="flex grow">
          <Menu />
          <div className="flex flex-col px-5 py-0 grow xl:px-32 xl:py-10">
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
              <div className="flex flex-col justify-between w-1/4 h-full gap-3">
                <KPICard type="calories" />
                <KPICard type="proteines" />
                <KPICard type="glucides" />
                <KPICard type="lipides" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
