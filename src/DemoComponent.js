

function DemoComponent(props){
    return(
        <>
            <h1>The Users Age is:  {props.age}</h1>
            <button onClick={(evt) => props.setAge(props.age++) }>Add Year</button>
        </>
    );
}

export default DemoComponent;