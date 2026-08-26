import "./App.css";
import ProfileCard from "./ProfileCard";

/* function WelcomeMessage(name) {
  return <h1>Hello, {name}!</h1>;
}

function Greeting(isMorninig) {
  if (isMorninig) {
    return <h1>Good Morning!</h1>;
  }
  return <h1>Good Evening!</h1>;
}

function showAlert(condition, message) {
  if (condition) {
    return AlertBox(message);
  }
  return null;
}

function AlertBox(message) {
  return <div className="alert">{message}</div>;
} */

function App() {
  /* const name = "Alice";
  const buttonLable = "Click Me";
  const imageUrl = "https://placehold.co/100x100";

  return (
    <div>
      <h1 className="greeting">Hello, {name}!</h1>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        {buttonLable}
      </button>
      <button onClick={() => alert("button Clicked!")}>Alert Me!</button>

      <br />
      <img src={imageUrl}></img>
    </div>
  );
  // const isLoggedIn = false;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
  const element = <h1>{isLoggedIn ? "Welcome back!" : "Please login."}</h1>;
  const messages = ["1", "Message"];
  return (
    <div>
      {element}
      {messages.length > 0 && (
        <h2>You have {messages.length} unread messages.</h2>
      )}
    </div>
  ); 

  const now = new Date();
  const isMorninig = now.getHours() < 12;
  return (
    <div>
      // This is a single line comment
      // This is a multi-line comment
      // that spans multiple lines.
      // WelcomeMessage("Alice")
      {WelcomeMessage("Bob")}
      {WelcomeMessage("John")}
      {Greeting(isMorninig)}
      {showAlert(true, "This is important!")}
    </div>
  ); */

  // API Call -> Fetching user name from the server

  const handleHobbyClick = (hobby) => {
    alert(`You clicked on ${hobby}`);
  };

  const aliceProfile = {
    name: "Alice",
    age: 23,
    isMember: true,
    hobbies: ["Reading", "Cooking"],
    onHobbyClick: handleHobbyClick,
  };

  const johnProfile = {
    name: "John",
    age: 42,
    isMember: false,
    hobbies: ["Swimming", "Hiking"],
    onHobbyClick: handleHobbyClick,
  };

  return (
    <div className="app-container">
      <h1>Hello</h1>
      <ProfileCard {...aliceProfile} />
      <ProfileCard {...johnProfile} />
    </div>
  );
}
export default App;
