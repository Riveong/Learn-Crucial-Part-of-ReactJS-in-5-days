function Map2() {
    const cars = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: 2,
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: 3,
        brand: 'Suzuki',
        model: 'Swift',
    }
];
return(
    <>
    <b>Brand:</b> {/* we gonna show the brand of the car */}
        <ul>
            {cars.map((car)=>(
                <li key={car.id}>{car.brand}</li>
            ))}
        </ul>
        <b>Model:</b> {/* we gonna show the model of the car */}
        <ul>
            {cars.map((car)=>(
                <li key={car.id}>{car.model}</li>
            ))}
        </ul>
    </>
)
}
export default Map2;