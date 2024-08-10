function Event(){
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

export default Event;