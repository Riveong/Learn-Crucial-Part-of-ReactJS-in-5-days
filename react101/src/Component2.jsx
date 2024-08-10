import { CopyBlock, dracula } from 'react-code-blocks';


function Component2 (props) {
    const something = "something";
    return (
    <>
        <div>
        <b className="text-2xl">2. Variables in component</b>
        <p>How do we insert clothes in the wardrobe? this is how do you insert variables in your jsx. you can also insert anything including ur functions.</p>
        Example:
        <p className="cool-code">This is {something}</p>
        <br />
        </div>
        Component 2 source code:
        <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    />
    </>
    )
}

export default Component2;