
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
           

            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
