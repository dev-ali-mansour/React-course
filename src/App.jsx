import "./App.css";

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
  ); */
  const isLoggedIn = false;
  /*if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  } */
  const element = <h1>{isLoggedIn ? "Welcome back!" : "Please login."}</h1>;
  const messages = ["1", "Message"];
  return (
    <div>
      {element}
      {messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>}
    </div>
  );
}

export default App;
