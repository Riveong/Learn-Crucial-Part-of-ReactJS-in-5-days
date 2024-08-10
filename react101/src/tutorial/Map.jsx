function Map() {
    const fruits = ['Mango', 'Apple', 'Grape',];
    return(
        <>
        <ul>
                {fruits.map((fruit, index)=>( 
                    <li key={index}>{fruit}</li>
                ))}
        </ul>
        </>
    )
}
export default Map;