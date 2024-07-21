import { useState } from "react"
import classes from './LimitedCounter.module.css'

function LimitedCounter(){
    const [counter, setCounter]= useState(0)
    const [limit, setLimit] = useState([])
    
    const increaseCounter = () =>{
        if(counter<10){
            setCounter(prevCount => prevCount + 1)
            setLimit([])
        }else{
            setCounter(10)
            setLimit(['Limite superior atingido'])
        }
    }

    const decreaseCounter = () =>{
        if(counter>-10){
            setCounter(prevCount => prevCount - 1)
            setLimit([])
        }else{
            setCounter(-10)
            setLimit(['Limite inferior atingido'])
        }
    }

 
    return(
        <div>
            <h2>Contador Limitado</h2>
            <h3>{counter}</h3>
            <button onClick={decreaseCounter}>-1</button>
            <button onClick={increaseCounter}>+1</button>
            {limit && <p className={classes.alert}>{limit}</p>}
        </div>
    )

}

export default LimitedCounter