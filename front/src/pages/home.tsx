import { useParams } from "react-router-dom";

import Banner from "../components/banner";
import Header from "../components/header";
import Menu from "../components/menu";
import Chart from "../components/chart";

function Home() {
  const { userId } = useParams();

  return (
    <>
      <section className="flex flex-col h-screen">
        <Header />
        <div className="flex grow">
          <Menu />
          <div className="flex flex-col grow">
            <Banner userId={userId} />
            <div className="flex flex-row">
              <div className="flex flex-col w-3/4">
                <div className="w-100">
                  <Chart userId={userId} />
                </div>
                <div className="flex flex-row">
                  <div className="w-1/3"></div>
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
