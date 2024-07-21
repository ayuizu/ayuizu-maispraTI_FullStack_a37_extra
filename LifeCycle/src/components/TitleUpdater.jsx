import { useState, useEffect } from "react"

function TitleUpdater(){
    //Título da aba = document.title
    const [number, setNumber]= useState(1)
    
    const increaseNumber = () =>{
        setNumber((prevNumb => prevNumb+1))
    }

    const decreaseNumber = () =>{
        setNumber(prevNumb=>prevNumb-1)
    }

    useEffect(()=>{
        document.title=`Aba nº ${number}`
        return ()=>{
              console.log('Título atualizado')
        }
    },[number])

    return(
        <div>
            <h2>Atualizar Título da Aba</h2>
            <h3>{number}</h3>
            <button onClick={decreaseNumber}>Decrementar Número</button>
            <button onClick={increaseNumber}>Incrementar Número</button>
        </div>
    )

}

export default TitleUpdater