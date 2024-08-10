// this is a component
import { CopyBlock, dracula } from 'react-code-blocks';


function Component (props) {
    const code = "test"
    return (<> {/* each components must be wrapped with a single parent element*/}
    <br /> {/* each tags must be closed, this principal applies to <br>, <img>, etc*/}
    <b className="text-2xl">1. This is a Component</b>
    <p>This section is a component, if we are gonna decorate our bedroom there are more than 1 furniture inside the room, we can consider: 1 component equals to 1 furniture. This component is a bed <br />and the other can be wardrobe.</p>
    Example:
    <p className="cool-code">This section is a component</p>
    <br />
    Source code of this component.jsx:
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    />
  <br />
    Source code of App.jsx:
    <CopyBlock
      text={`//in your App.jsx
import React from "react"; {/* import react */}
import Component from "./Component"; {/* import the component */}

function App () { {/* create the App function */}
  return ( 
    <Component />{/* return the component */}
)

export default App; {/* export the App function */}`}
      language={props.language}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    />

    
    
    </>)
}

export default Component;