//make a  file in the src folder and name it 'Component.jsx'
function Component () { 
    return (
    <>{/* this is a fragment, each component must have a parent tag. U can use div or a fragment*/}
      <p>This section is a component</p> {/* this is a paragraph, you can make class with className instead of class */}
    </>
    )
};

export default Component; {/* this is how you export a component */}