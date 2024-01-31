import Banner from "../components/banner";
import Header from "../components/header";
import Menu from "../components/menu";
import ChartActivity from "../components/chartActivity";
import ChartSessions from "../components/chartSessions";

function Home() {
  return (
    <>
      <section className="flex flex-col h-screen">
        <Header />
        <div className="flex grow">
          <Menu />
          <div className="flex flex-col grow">
            <Banner />
            <div className="flex flex-row">
              <div className="flex flex-col w-3/4">
                <div className="w-100">
                  <ChartActivity />
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3">
                    <ChartSessions />
                  </div>
                  <div className="w-1/3"></div>
                  <div className="w-1/3"></div>
                </div>
              </div>
              <div className="flex w-1/4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
