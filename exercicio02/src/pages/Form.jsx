import React from 'react'
import "./Form.css"
const Form = () => {
    return (
        <div>
            <div>
                <form>
                    <label>
                        <span>Nome</span>
                        <input type="text" name="nome" id="nome" placeholder='nome' />
                    </label>

                    <label>
                        <span>Email</span>
                        <input type="email" name="email" id='email' placeholder='name@site.com' />
                    </label>

                    <label>
                        <span>Mensagem</span>
                        <textarea type="text" name="mensagem" id='mensagem' placeholder='mensagem' cols="30" rows="10" />
                    </label>

                    <button type='submit'>Enviar</button>

                </form>
            </div>
        </div>
    )
}

export default Form