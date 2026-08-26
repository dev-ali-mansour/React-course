function ProfileCard({ name, age, isMember, hobbies }) {
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {isMember ? "ActiveMember" : "Guest"}</h3>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProfileCard;
