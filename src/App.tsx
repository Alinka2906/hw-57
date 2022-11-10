import React, {useState} from 'react';
import './App.css';
import UsersForm from "./components/UsersForm/UsersForm";
import Users from "./components/Users/Users";
import type {Types} from "./types";

function App() {
  const [users, setUsers] = useState<Types[]>([]);

  const addUser = (newUser: Types) => {
    setUsers(prev => [...prev, newUser]);
  }

  return (
    <div className="App">
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col">
            <UsersForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users users={users}/>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
