import { Fragment } from "react";
function ListGroup(){
    const items = [
        'I hate PHP','I hate JS','I hate rent a gf','I hate Kimetsu no yaiba','I hate yall'
    ];
    
    return(
    <>
        <h1>My Intrusive Thoughts</h1> 
        <ul className="list-group">
        {items.map((item)=>(
        <li className="list-group-item" key={item}>{item}</li>
        ))}
        </ul>
    </>);
}

export default ListGroup;