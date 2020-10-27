import { ReactElement } from "react";
import { User } from "../interfaces";

type UserProps = {
  user: User;
};

function UserDetail({ user }: UserProps): ReactElement {
  return (
    <>
      <div>
        ID: <span>{user.id}</span>
      </div>
      <div>
        Name: <span>{user.name}</span>
      </div>
      <div>
        Email: <span>{user.email}</span>
      </div>
    </>
  );
}

export default UserDetail;
