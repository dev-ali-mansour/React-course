function ProfileCard(props) {
  //   props.name = "John"; // This line will cause an error because props are read-only

  return (
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  );
}

export default ProfileCard;
