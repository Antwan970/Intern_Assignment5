import React, { useEffect, useState } from "react";
import {type User} from "../user";
import Greeting from "../components/Greeting";
import List from "../components/List";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleReverse = () => {
    setUsers([...users].reverse());
  };

  return (
    <div className="p-6 ">
      <Greeting name="Antwan" />

      <button
        onClick={handleReverse}
        className="bg-green-500 text-white px-4 py-2 mb-4 rounded"
      >
        Reverse Users
      </button>

      <List
        items={users}
        renderItem={(user) => (
          <div
            key={user.id}
            className="border p-4 mb-2 rounded shadow-sm bg-white text-black"
          >
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Home;