//make a  file in the src folder and name it 'Component2.jsx'
function Component2 () {
    const something = "something"; {/* this is a variable */}
    return (
        <div>
            <p className="cool-code">This is {something}</p>  {/* you can use a variable inside a jsx */}
            <br />
        </div>
    )
}

export default Component2;