import "./App.css";
// import ProfileCard from "./ProfileCard";
import ParentComponent from "./ParentComponent";

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
  const isMorninig = now.getHours() <div 12;
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

  /*   const handleHobbyClick = (hobby) => {
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

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  };
  const incrementTwice = () => {
    // setCount(count + step);
    // setCount(count + step);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrementCount = () => {
    setCount(count - step);
  };

  return (
    <div className="app-container">
      <h1>Counter Value:{count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  );

  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) => {
        return counter.id === id ? { ...counter, value: counter.value + 1 } : counter;
      }),
    );
  };

  return (
    <div className="app-container">
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map((counter) => {
          return (
            <li key={counter.id}>
              Counter {counter.id}: {counter.value}
              <button onClick={() => incrementCounter(counter.id)}>
                Increment
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="app-container">
      <h1>Form Example</h1>
      <form>
        //  Text Input 
        <div className="form-field">
          <label>Text:</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        //  Checkbox
        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
            Checkbox
          </label>
        </div>
        //  Radio Buttons
        <div className="form-field">
          <label>Radio:</label>

          <label>
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === "option1"}
              onChange={handleChange}
            />
            Option 1
          </label>

          <label>
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === "option2"}
              onChange={handleChange}
            />
            Option 2
          </label>
        </div>

        //  Dropdown
        <div className="form-field">
          <label>Select:</label>
          <select name="select" value={formData.select} onChange={handleChange}>
            <option value="">-- Choose an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className="form-data">
          <h3>Form Data:</h3>
          <p>
            <strong>Text:</strong> {formData.text || "N/A"}
          </p>
          <p>
            <strong>Checkbox:</strong>{" "}
            {formData.checkbox ? "Checked" : "Not checked"}
          </p>
          <p>
            <strong>Radio:</strong> {formData.radio || "N/A"}
          </p>
          <p>
            <strong>Select:</strong> {formData.select || "N/A"}
          </p>
        </div>
      </form>
    </div>
  );

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#ffffff",
    "#000000",
    "#ffa500",
    "#800080",
    "#008000",
    "#808080",
    "#ffc0cb",
    "#f0e68c",
    "#add8e6",
    "#a52a2a",
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>

      <div className="custom-color-picker">
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
    </div>
  );

  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("useEffect Triggered");
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <h1>useEffect Hook</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>Another Value</button>
    </div>
  );*/
  return (
    <div>
      <ParentComponent />
    </div>
  );
}
export default App;
