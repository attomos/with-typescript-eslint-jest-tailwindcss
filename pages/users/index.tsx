import { ReactElement } from "react";
import { users } from "../api/users";
import Layout from "../../components/Layout";
import UserItem from "../../components/UserItem";

function UsersPage(): ReactElement {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>List of users</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default UsersPage;
