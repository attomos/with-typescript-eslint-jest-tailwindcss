import { Button } from "@material-ui/core";
import { ReactElement } from "react";
import Layout from "../components/Layout";

function IndexPage(): ReactElement {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h2>Helllo</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.alert("With typescript and Jest");
        }}
      >
        test
      </Button>
    </Layout>
  );
}

export default IndexPage;
