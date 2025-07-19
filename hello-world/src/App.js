import "./App.css";
// import Greet from "./components/Greet";
// import Hello from "./components/hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Quote from "./components/Quote";

import Books from "./components/Books";

function App() {
  return (
    <div className="App">
    <div className="Whole-Container">

      <h1 className="heading">E-Books</h1>
      <div className="box">
     
        <div className="object-container">
          {/* <div className="books"><img src="https://m.media-amazon.com/images/I/41wuB-s8vRL._SL500_.jpghello-world\src\components\atomic.jpg"></img> <a href="">Atomic Habits</a></div> */}
          <Books/>
        </div>
      </div>

    </div>
      
    </div>
  );
}



export default App;
