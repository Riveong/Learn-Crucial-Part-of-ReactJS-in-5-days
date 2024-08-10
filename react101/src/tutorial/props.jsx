// make a file in the src folder and name it 'Props.jsx'
function Props (props) {  {/* make a parameter in the function, we can call it props */}
    return (
        <div>
            <h1>{props.name}</h1> {/* this is how you insert props */}
            <h2>{props.age}</h2> 
        </div>
    );
}

export default Props;