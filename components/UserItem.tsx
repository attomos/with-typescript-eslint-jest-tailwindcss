import Link from "next/link";
import React, { ReactElement } from "react";
import { User } from "../interfaces";

type Props = {
  user: User;
};

const ListItem = ({ user }: Props): ReactElement => (
  <Link href="/users/[id]" as={`/users/${user.id}`}>
    <a>
      {user.id}: {user.name}
    </a>
  </Link>
);

export default ListItem;
