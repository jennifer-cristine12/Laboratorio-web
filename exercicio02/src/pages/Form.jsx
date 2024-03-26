import React, { useState } from 'react'
import "./Form.css"
const Form = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMessage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("enviando formulario")
        console.log(nome, email, mensagem)
        setNome("")
        setEmail("")
        setMessage("")

    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}> 
                    <label>
                        <span>Nome</span>
                        <input type="text" name="nome" id="nome" placeholder='nome completo' onChange={(e)=>setNome(e.target.value)} value={nome} />
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="email" name="email" id='email' placeholder='name@site.com' onChange={(e)=>setEmail(e.target.value)} value={email} />
                    </label>

                    <label>
                        <span>Mensagem</span>
                        <textarea type="text" name="mensagem" id='mensagem' placeholder='mensagem' cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)} value={mensagem}/>
                    </label>

                    <button type='submit'>Enviar</button>

                </form>
            </div>
        </div>
    )
}

export default Form