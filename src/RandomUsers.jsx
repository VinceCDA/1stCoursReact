import { useState } from "react";
import UserSearch from "./UserSearch";
import UserViewer from "./UserViewer";
import UserCard from "./UserCard";
import RANDOMUSERS from "./assets/datausers.json";
import "./RandomUsers.css";

export default function RandomUsers() {
  console.log(RANDOMUSERS);
  const allUsers = RANDOMUSERS.results;
  const [index, setIndex] = useState(0);
  const user = allUsers[index];
  const nextUser = () => {
    setIndex((userIndex) => {
      return userIndex + 1 >= allUsers.length ? 0 : userIndex + 1;
    });
  };
  const previousUser = () => {
    setIndex((userIndex) => {
      return userIndex - 1 < 0 ? allUsers.length - 1 : userIndex - 1;
    });
  };

  return (
    <>
      <h1>Search User</h1>
      <UserSearch users={RANDOMUSERS.results} />
      <h1>Random Users</h1>
      <section className="userCards">
        {RANDOMUSERS.results.map((user) => {
          return <UserCard key={user.login.uuid} user={user} />;
        })}
      </section>
      <UserViewer
        user={user}
        index={index}
        usersLength={allUsers.length}
        previousUser={previousUser}
        nextUser={nextUser}
      />
    </>
  );
}
