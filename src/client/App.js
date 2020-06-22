import React, {useState} from 'react';
import {render} from 'react-dom';

const styleObj = {
  "display": "flex",
  "justify-content": "center",
  "align-items": "center",
  "height": "100vh",
  "flex-direction": "column"
};
const buttonStyleObj = {
  "border":"solid 3px #01a9b4",
  "background":"#086972",
  "padding":"10px 50px",
  "border-radius":"5px",
  "color":"#fff",
  "font-family":"sans-serif",
  "font-weight":"bolder",
  "font-size":"20px"
};

const App = () => {
  const [welcomeText, setWelcomeText] = useState("");
  return(
    <div style={styleObj}>
      <button style={buttonStyleObj} onClick={() => setWelcomeText("Events are successfully attached on server side rendered HTML.")}>Click</button>
      <h1>{welcomeText}</h1>
    </div>
  )
};

export default App;
