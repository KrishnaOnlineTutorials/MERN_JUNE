const HelloWorld = (props) => {// props is an object
    const {userName, age, location, contact} = props; // destructuring assignment
    
    return (
        <div>
            <h1>{userName}</h1> 
            <h2>{age}</h2>
            <h3>{location}</h3>
            <h4>{contact}</h4>

            <p>Welcome to the world of React!</p>
        </div>
    );
}

export default HelloWorld;