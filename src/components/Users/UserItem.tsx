import React, {useState} from 'react';
import {Types} from "../../types";

interface Props {
  user: Types;
}

 const UserItem: React.FC<Props> = ({user}) => {
   const imageUrl = 'https://png.pngitem.com/pimgs/s/80-800055_clipart-users-icon-hd-png-download.png'



  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start"><img className="w-50 mt-4" src={imageUrl}/></div>
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