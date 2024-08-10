import Component from "./Component";
import Component2 from "./Component2";
import Props from "./Props";
import Map from "./Map";
import Event from "./Event";
import State from "./State";
import Intro from "./Intro";
import { CopyBlock, dracula } from 'react-code-blocks';

function App () {
  const code1 = 
  `//make a  file in the src folder and name it 'Component.jsx'
  function Component () { 
    return ({/* this is how you make comments in jsx */}
    <>{/* this is a fragment, each component must have a parent tag. U can use div or a fragment*/}
      <p className="cool-code">This section is a component</p> {/* this is a paragraph, you can make class with className instead of class */}
    </>
    )
};

export default Component; {/* this is how you export a component */}`;

  const code2 =
  `//make a  file in the src folder and name it 'Component2.jsx'
  function Component2 () {
    const something = "something"; {/* this is a variable */}
    return (
        <div>
            <p className="cool-code">This is {something}</p>  {/* you can use a variable inside a jsx */}
            <br />
        </div>
    )
}

export default Component2;`;

const code3 =`//in your App.jsx
import React from "react"; {/* import react */}
import Props from "./Props"; {/* import the component */}

function App () {
  return ( 
    <Props name="John" age="25" /> {/* return the component with the parameter name */}
    <Props name="Jane" age="22" />
    <Props name="Doe" age="30" />
)

export default App;
`


const code4 =`// make a file in the src folder and name it 'Props.jsx'
function Props (props) {  {/* make a parameter in the function, we can call it props */}
    return (
        <div>
            <h1>{props.name}</h1> {/* this is how you insert props */}
            <h2>{props.age}</h2> 
        </div>
    );
}

export default Props;
`


  return (
    <div className="px-20 py-10">
      <Intro />
      <Component code={code1} language="jsx" showLineNumbers="true" theme="dracula"/><br />
      <Component2 code={code2} language="jsx" showLineNumbers="true" theme="dracula"/><br />
      <b className="text-2xl">3. Props</b> {/* sorry for the hard coded thingy lmao*/}
      <p>it will be a pain in the arse if we keep making components over and over right? in normal programming we know there's this principal / paradigm called function, we can use function over and over again<br /> we can make a function together with parameters in it. Parameter is like a variable you are giving to the function. in jsx you also can make function with parameters. Introducing props to you!</p>
      

<p>Component source code:</p>
<CopyBlock
      text={code4}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    /><br />
<p>here we gonna call the component with props 4 times with diffrent names.</p>
<p>App source code:</p>
<CopyBlock
      text={code3}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    /><br />
    <p>result:</p>
      <Props name="John" age="25" /><br />
      <Props name="Jane" age="22" /><br />
      <Props name="Doe" age="30" /><br />
      <Props name="Smith" age="35" /><br />
      <Map />
      <br />
      <b className="text-2xl">5. Reactivity, Interactivity, what is that melody TwT</b> {/* sorry for the hard coded thingy lmao*/}
      <p>the last thing we should learn here is reactivity, yes we gonna learn about state and stuff. You probably already know about reactivity and probably you've been avoiding react because of it. but I've come into a conclusion... it's not that hard and not bad actually... But it's ok we gonna learn about event first!</p>
      <b>Event</b>
      <p>Event is event. yes that's the definition... consider there's a switch or a button when we press on that button something will trigger. we call this an event! and behind the button there will be logic to activate some kind of mechanism. We call the mechanism "an event handler".</p>
      
      <CopyBlock
      text={`function Event(){
    function clickHandler(){ {/* this is a function that we will call with the button below*/}
        alert("Button clicked");
    }
    function clickHandlerWithParameter(message){ {/* this is a function with a parameter that we will call with the button below*/}
        alert(message);
    }
    return (
        <>
            <div>
                <button onClick={clickHandler}>this is a button with a handler please click me</button> {/* this is a button with a handler, you can call it with onClick function */}
            </div>
            <div>
                <button onClick={() => alert("Button clicked")}>this button has a handler inside of it</button> {/* this is a button with a 
                handler inside of it we can make an empty function inside of it*/}
            </div>
            <div>
                <button onClick={() => clickHandlerWithParameter("this is a parameter inside an event handler")}>this button has a handler and a parameter in it</button> 
                {/* this is a button with a handler and a parameter in it */}
            </div>
        </>
    );
}

export default Event;`}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    /><br />
    result:
      <Event />
      <br />
      <b>State</b><br />
      lastly state... the big boss of all of the bosses... the king of the kings... the god of the gods... the... ok I'm overreacting... let's learn about state! We use state to make our component reactive, we can change the value of the state and the component will re-render itself.
      <br />
      for example click on the button below!
      <br />
      <State />
      <p>to make a state we have to import useState first.</p>
      <CopyBlock
      text={`import React, { useState } from 'react';`}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    />
    <p>then we can make a state like this:</p>
    <CopyBlock
      text={`const [greet, setGreet] = useState('wassup');`}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines />
      <p>Notice that we make 2 variables inside an array. The first variable, greet is the variable that has value. and the setGreet is a function to set the value of greet. And the useState wassup means we are going to give the initial value "wassup" to the greet.</p>
      <p>now make a button with a onclick empty function that change the value of the state like this:</p>
      <CopyBlock
      text={`<button className="bg-blue-500 p-2" onClick={() => {setGreet('hello')}}>Change text</button>`}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines />
      <p>congratulation now you can do whatever you want with state. Here's the full code of the hello and hey button</p>
      <CopyBlock
      text={`import {useState} from 'react';

function State(){
    const [hello, changeHello] = useState("hello");
    return(
        <div>
            <h1>{hello}</h1>
            <button className="bg-blue-500 p-2" onClick={() => {
                if(hello === "hey"){
                    changeHello("hello")
                }else{
                    changeHello("hey")
                }
            }}>Change text</button>
        </div>
    )
}

export default State;`}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines />
      <br />
      <b className="text-2xl">Bonus: Light mode Dark mode</b>
      <p>you can make a light mode and dark mode with react. you can make a state with a boolean value and change the value with a button. here's the full code of the light mode dark mode:</p>
      <CopyBlock
      text={`import { useState } from "react";

function Darkmode() {
const [mode, setMode] = useState(false);
const [text, setText] = useState("🌙 Dark Mode");
    return(
        <>
            <div className="fixed top-4 right-4">
                <h1 className="">{mode}</h1>
                <button className="text-black dark:text-white rounded-full bg-slate-500 p-2" onClick={()=>{
                    if(mode === false){
                        setMode(true)
                        setText("☀️ Flash Bang Mode")
                        document.body.style.backgroundColor = "#242424";
                        document.body.style.color = "white";
                    }else{
                        setMode(false)
                        setText("🌙 Dark Mode")
                        document.body.style.backgroundColor = "#f3f4f6";
                        document.body.style.color = "black";
                    }
                }}>{text}</button>
            </div>
        </>
    )
}

export default Darkmode; `}
language={'jsx'}
showLineNumbers= {true}
theme={dracula}
wrapLines />
<p>there you go! 5 days of react I hope that you found it informative and enjoyable. Happy coding!</p>
    </div>
      
    
  )
}


export default App;