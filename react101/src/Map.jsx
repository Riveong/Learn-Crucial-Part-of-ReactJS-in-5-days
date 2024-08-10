import { CopyBlock, dracula } from 'react-code-blocks';
function Map() {
    const fruits = ['Mango', 'Apple', 'Grape',];
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
            <b className="text-2xl">4. Map</b>
            <p>let's get more technical shall we? now that we are already learned the basic of react, we gonna connect the nodes between backend to frontend. when you make a request, the response usually gonna be in Json format.<br />anddddd we get those dictionary list stuff. here we gonna deal with them, we can use map to make our life easier! starting with a simple list:</p>
            <CopyBlock
      text={`function Map() {
    const fruits = ['Mango', 'Apple', 'Grape',];
    return(
        <>
        <ul>
                {fruits.map((fruit, index)=>( {/* map is a function that will iterate over an array */}
                    <li key={index}>{fruit}</li> {/* key is a unique identifier */}
                ))}
        </ul>
        </>
    )
}
export default Map;       
        `}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines
    />
    <br />
    <p>result:</p>
            <ul>
                {fruits.map((fruit, index)=>(
                    <li className='cool-code' key={index}>{fruit}</li>
                ))}
            </ul>
            <br />
            <p>now let's get to the business, let's try to map a dictionary list!<br></br>for example we have this list:</p>
            <CopyBlock
        text={`const cars = [
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
];`}
            language='json'
            showLineNumbers= {true}
            theme={dracula}
            wrapLines
            />
            <br />

<p>as we can see, there are keys and values. We could set the key of the list to the key id. and if we want to show the certain value of the car we could call it like a class object. for the example if we want to call the brand value:<br />
</p>
<p className='cool-code'>car.brand</p>
<br />
<p>here is the full code of the thing that I've explained:</p>
<CopyBlock
      text={`function Map() {
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
export default Map;       
        `}
      language={'jsx'}
      showLineNumbers= {true}
      theme={dracula}
      wrapLines />
      <br />
      <p>result: </p>
        <div className='cool-code'>
            <b>Brand:</b>
            <ul>
                {cars.map((car)=>(
                    <li key={car.id}>{car.brand}</li>
                ))}
            </ul>
            <b>Model:</b>
            <ul>
                {cars.map((car)=>(
                    <li key={car.id}>{car.model}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Map;