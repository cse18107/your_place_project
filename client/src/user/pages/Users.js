import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Soumodeep Maity",
      image:
        "https://i.ibb.co/pXfZN2t/irene-strong-v2a-Knj-Mb-P-k-unsplash.jpg",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
