import { useState } from "react";
import UserCard from "./UserCard";
import "./UserSearch.css"

export default function UserSearch({ users }) {
  const [searchText, setSearchText] = useState("");
  const allUsers = users;
  const filteredUsers = allUsers.filter((user) => {
    const name = `${user.name.first} ${user.name.last}`.toLocaleLowerCase();
    const city = user.location.city.toLocaleLowerCase();
    const age = user.dob.age.toString();
    return (
      name.includes(searchText.toLocaleLowerCase()) ||
      city.includes(searchText.toLocaleLowerCase()) ||
      age.includes(searchText.toString())
    );
  });
  const textChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={textChange}
        />
      </div>
      <section className="userCards">
        {filteredUsers.map((user) => {
          return <UserCard key={user.login.uuid} user={user} />;
        })}
      </section>
    </>
  );
}
