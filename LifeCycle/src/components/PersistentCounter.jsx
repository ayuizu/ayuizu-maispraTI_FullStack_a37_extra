import { useState, useEffect } from "react"

function PersistentCounter(){
    const [ counter, setCounter ] = useState(() => {
        // Inicializar useState obtendo valor do localStorage se houver, se não inicializar com 0
        const savedCounter = localStorage.getItem('counter');
        return savedCounter !== null ? JSON.parse(savedCounter) : 0;
    })

    const increaseCounter = () =>{
        setCounter(prevCount => prevCount + 1)
    }

    const decreaseCounter = () =>{
        setCounter(prevCount => prevCount - 1)
    }

    useEffect(()=>{
        //Settando valor do localStorage sempre que counter atualizar
        localStorage.setItem('counter', JSON.stringify(counter))

        return()=>{
            console.log('localStorage atualizado')
        }
    },[counter])

    return(
        <div>
            <h2>Atualizar Local Storage</h2>
            <h3>{counter}</h3>
            <button onClick={decreaseCounter}>Decrementar Contador</button>
            <button onClick={increaseCounter}>Incrementar Contador</button>
        </div>
    )
}
export default PersistentCounter