function Props (props) {
    return (
        <div className="cool-code">
            <h1>{props.name}</h1> {/* this is how you insert props */}
            <h2>{props.age}</h2>
        </div>
    );
}

export default Props;