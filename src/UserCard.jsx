import "./UserCard.css";
export default function UserCard({ user }) {
    const isSelected = false;
  return (
    <>
      <div className={`userCard ${isSelected ? "selected" : ""}`}>
        <img src={user.picture.large} alt="profile picture" />
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p>{user.location.city}</p>
        <p>{user.dob.age}</p>
      </div>
    </>
  );
}
