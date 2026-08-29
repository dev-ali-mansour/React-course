import DarkModeToggle from "./DarkModeToggle";
import "./App.css";

function App() {
  /* return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">
          Hello Tailwind CSS in React!
        </h1>
        <p className="text-gray-600">
          This is a simple example using Tailwind CSS in a React project.
        </p>
      </div>
    </div>
  ); 
  return (
    <div className="bg-gray-100 p-4">
      <ul className="list-none md:flex md:gap-4">
        <li className="bg-(--color-custom-blue) text-white p-2 m-2 rounded-lg md:px-4">
          Item 1
        </li>
        <li className="bg-(--color-custom-blue) text-white p-2 m-2 rounded-lg md:px-4">
          Item 2
        </li>
        <li className="bg-(--color-custom-blue) text-white p-2 m-2 rounded-lg md:px-4">
          Item 3
        </li>
      </ul>
    </div>
  );*/

  return (
    <div className="p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white">
      <DarkModeToggle />
      <h1 className="text-3xl font-bold mt-4 mb-2">Welcome to Dark Mode App</h1>
      <p>This is an example of implementing dark mode using Tailwind CSS.</p>
    </div>
  );
}

export default App;
