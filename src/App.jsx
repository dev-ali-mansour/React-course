import "./App.css";

function App() {
  const name = "Alice";
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
}

export default App;
