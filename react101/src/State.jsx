import {useState} from 'react';



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

export default State;