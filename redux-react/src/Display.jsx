import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Currnt Count in Display:{count}</h2>
    </div>
  );
};

export default Display;
