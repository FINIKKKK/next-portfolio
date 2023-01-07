import { NextPage } from "next";
import { Input, Sidebar } from "../../components";

interface RootPageProps {}

const RootPage: NextPage<RootPageProps> = ({}) => {
  return (
    <section className="root">
      <div className="container">
        <div className="inner">
          <Sidebar />

          <main className="main">
            
          </main>
        </div>
      </div>
    </section>
  );
};

export default RootPage;
