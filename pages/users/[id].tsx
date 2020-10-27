import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";
import Layout from "../../components/Layout";
import UserDetail from "../../components/UserDetail";
import { User } from "../../interfaces";
import { users } from "../api/users";

type Props = {
  user: User;
};

function UserPage({ user }: Props): ReactElement {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h2>User Detail</h2>

      <UserDetail user={user} />
    </Layout>
  );
}

export default UserPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const user = users.find((data) => data.id === Number(id));
    // By returning { props: user }, the StaticPropsDetail component
    // will receive `user` as a prop at build time
    return { props: { user } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
