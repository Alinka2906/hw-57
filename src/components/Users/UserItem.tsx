import React, {useState} from 'react';
import {Types} from "../../types";

interface Props {
  user: Types;
}

 const UserItem: React.FC<Props> = ({user}) => {
   const name = user.name;
   const email = user.email;
   const category = user.category;



  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text small">{user.email}</p>
            <p className="card-text">{user.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;