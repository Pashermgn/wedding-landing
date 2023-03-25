import { Greeting } from "./Components/Blocks/Greeting";
import { Date } from "./Components/Blocks/Date";
import { Venue  } from "./Components/Blocks/Venue";
import { Photography } from "./Components/Blocks/Photography";
import { Register } from "./Components/Blocks/Register";
import { RestTime } from "./Components/Blocks/RestTime";

import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Date />
      <Venue />
      <Photography />
      <Register />
      <RestTime />
    </div>
  );
}

export default App;
