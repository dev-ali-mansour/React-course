function ProfileCard(props) {
  //   props.name = "John"; // This line will cause an error because props are read-only
  const sume = props.num + 1;
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Status: {props.isMember ? "ActiveMember" : "Guest"}</h3>
    </div>
  );
}

export default ProfileCard;
