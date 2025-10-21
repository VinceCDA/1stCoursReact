import "./UserViewer.css";

export default function UserViewer({
  user,
  index,
  usersLength,
  previousUser,
  nextUser,
}) {
  return (
    <>
      <div className="container">
        <h1>User Viewer</h1>
        <div key={user.login.uuid} className="userCard">
          <img src={user.picture.large} alt="profile picture" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.location.city}</p>
          <p>{user.dob.age}</p>
        </div>
        <div className="userButtons">
          <button onClick={previousUser}>Previous</button>
          <button onClick={nextUser}>Next</button>
        </div>
        <p>
          User {index + 1} of {usersLength}
        </p>
      </div>
    </>
  );
}
