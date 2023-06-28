import {useState}from "react";

export default function Body() {

const [counter, setCounter] = useState(0);

const incrementCounter = ()=> {
    setCounter(counter + 1);
};
const decrementCounter = ()=> {
    setCounter(counter - 1);
};


    return (
        
            <section>
                <h1>Counter</h1>
                <p>{counter}</p>
                <button onClick = {incrementCounter}>+</button>
                <button onClick = {decrementCounter}>-</button>
                <button onClick={ ()=> {setCounter(counter + 1)} }>+</button>
                <button onClick={ ()=> {setCounter(counter - 1)} }>-</button>

                <ul>
                    <li>This</li>
                    <li>is</li>
                    <li>React</li>
                </ul>
            </section>
        
        
        
    
    )
}
