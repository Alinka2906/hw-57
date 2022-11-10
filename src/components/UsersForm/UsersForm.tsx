import React, {useState} from 'react';
import {Types} from "../../types";

interface Props {
  onSubmit: (user: Types) => void;
}

const UsersForm: React.FC<Props> = ({onSubmit}) => {
  const [users, setUsers] = useState<Types>(
    {name: '', email: '', category: '', isDone: false});

const onUsersChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const {name, value} = e.target;

  setUsers(prev => ({...prev, [name]: value}));
};

const onFormSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  onSubmit( {
    id: Math.random().toString(),
    ...users,
  })
};

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target
    setUsers(prev => ({...prev, [name]: checked}));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4> Add new user</h4>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          required
          className='form-control'
          value={users.name}
          onChange={onUsersChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>E-mail</label>
        <input
          id='email'
          name='email'
          type='email'
          required
          className='form-control mb-3'
          value={users.email}
          onChange={onUsersChange}
        />
      </div>
      <div className='form-group'>
        <label>
          <p>
            <input
              name="isDone"
              type="checkbox"
              checked={users.isDone}
              onChange={onCheckboxChange}
            /> Active</p></label>
        <label>
          <select
            id='category'
            name='category'
            className='form-control ms-5'
            value={users.category}
            onChange={onUsersChange}
            required
          >
            <option disabled value=''>Select category</option>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
          </label>
      </div>

      <button type="submit" className="btn btn-primary mt-4">Create user</button>
    </form>
  );
};

export default UsersForm;