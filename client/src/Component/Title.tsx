import ReactDOM from "react-dom";
import "../styles/Title.css";

function Title() {
  return <h1 className="title">Rent a Car in Brest</h1>;
}
ReactDOM.render(
  <Title />,
  document.getElementById('root')
);
export default Title;
