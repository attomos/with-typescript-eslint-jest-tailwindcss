import { ReactElement } from "react";
import Layout from "../components/Layout";

function IndexPage(): ReactElement {
  const items = [...Array(500).keys()];
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="border-solid border-2 h-64 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <ul>
          {items.map((i) => {
            return <li key={i}>{i}</li>;
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;
