import React from 'react';
import UserItem from "./UserItem";
import {Types} from "../../types";

interface Props {
  users: Types[],
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      <h4>Users</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </>
  );
};

export default Users;