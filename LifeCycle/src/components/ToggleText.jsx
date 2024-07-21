import { useState } from "react"

function ToggleText(){
    const [txt, setTxt] = useState('')
    const [visibility, setVisibility] = useState(true)
    const [buttonText, setButtonText] = useState('Ocultar Texto')

    const handleVisibility = () =>{
        if(visibility){
            setVisibility(false)
            setButtonText('Exibir Texto')
        }else{
            setVisibility(true)
            setButtonText('Ocultar Texto')
        }
    }

    return(
        <div>
            <h2>Alterar Visibilidade</h2>
            <br />
            <input type="text" id="input" onChange={()=>setTxt(document.getElementById('input').value)} placeholder="Digite aqui"></input>
            <br />
            <button onClick={handleVisibility}>{buttonText}</button>
            <p>{visibility && txt}</p>
        </div>
    )
}

export default ToggleText