import { useState, useEffect } from "react"

function WindowSize(){
    // window.innerWidth = largura da tela do navegador
    const [ width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        //Appends an event listener; The callback argument sets the callback that will be invoked when the event is dispatched.
        window.addEventListener('resize', handleResize)
        
        return() => {
            window.removeEventListener('resize', handleResize)
            console.log("Largura da página atualizada")
        }

    },[window])

    return(
        <div>
            <h2>Atualizar Largura da Página</h2>
            <h3>Largura da página: {width} px</h3>
        </div>
    )
}

export default WindowSize