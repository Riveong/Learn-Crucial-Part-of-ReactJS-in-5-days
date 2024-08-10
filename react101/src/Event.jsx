function Event(){
    function clickHandler(){
        alert("Button clicked");
    }
    function clickHandlerWithParameter(message){
        alert(message);
    }
    return (
        <>
            <div>
                <button className="bg-blue-500 p-3" onClick={clickHandler}>this is a button with a handler please click me</button>
            </div><br />
            <div>
                <button className="bg-blue-500 p-3" onClick={() => alert("Button clicked")}>this button has a handler inside of it</button>
            </div><br />
            <div>
                <button className="bg-blue-500 p-3" onClick={() => clickHandlerWithParameter("this is a parameter inside an event handler")}>this button has a handler and a parameter in it</button>
            </div>
        </>
    );
}

export default Event;