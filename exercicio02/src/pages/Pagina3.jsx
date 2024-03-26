import React from 'react'
import UserDetails from '../components/UserDetails'
const Pagina3 = () => {
  const users = [
    { id: 1001, nome: "Tom", idade: 19, profissao: "Só dorme" },
    { id: 1002, nome: "Lisa", idade: 17, profissao: "Aprendiz de inspetora" },
    { id: 1003, nome: "Jão", idade: 25, profissao: "Desenvolvedor" }

  ]
  return (
    <main>
      <section>
        <h2>Pagina 3</h2>
     
        {users.map((user) => (
          <UserDetails
            key={user.id}
            nome={user.nome}
            idade={user.idade}
            profissao={user.profissao}
          />
        ))}
      </section>
    </main>
  )
}

export default Pagina3