import React, { useState, useEffect } from "react";

function Week2_useEffect_fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // 데이터 불러오기
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []); // 데이터 한번만 불러오기

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Week2_useEffect_fetch;
