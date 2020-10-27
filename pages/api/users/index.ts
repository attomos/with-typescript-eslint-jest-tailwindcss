import { User } from "../../../interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export const users: User[] = [
  {
    id: 1,
    name: "Natsu",
    email: "natsu@example.com",
  },
  {
    id: 2,
    name: "Happy",
    email: "happy@example.com",
  },
  {
    id: 3,
    name: "Lucy",
    email: "lucy@example.com",
  },
];

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(users)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
