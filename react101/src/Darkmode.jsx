import { useState } from "react";

function Darkmode() {
const [mode, setMode] = useState(false);
const [text, setText] = useState("🌙 Dark Mode");
    return(
        <>
            <div className="fixed top-4 right-4">
            <a href="https://github.com/Riveong" className="text-blue-500">Follow my github</a>
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

export default Darkmode;