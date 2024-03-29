import { useState } from 'react'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'
import CarDetails from './components/CarDetails'



function App() {

  const users = [
    { id: 1001, nome: "Tom", idade: 19, profissao: "Só dorme" },
    { id: 1002, nome: "Lisa", idade: 17, profissao: "Aprendiz de inspetora" },
    { id: 1003, nome: "Jão", idade: 25, profissao: "Desenvolvedor" }

  ]
  const marca = [
    { id: 1001, marca: "Fiat", km: 150, cor: "azul", ano: 2019 },
    { id: 1002, marca: "Volksvagen", km: 230, cor: "vermelho", ano: 2010 },
    { id: 1003, marca: "Volvo", km: 40, cor: "verde", ano: 2023 },
    { id: 1004, marca: "Tesla", km: 10, cor: "roxo", ano: 2024 },
    { id: 1005, marca: "Honda", km: 0, cor: "cinza", ano: 2024 }

  ]
  return (
    <>
      <div>

        {marca.map((carro) => (
          <CarDetails
            key={carro.id}
            marca={carro.marca}
            km={carro.km} 
            cor={carro.cor} 
            ano={carro.ano} />
        ))}


      </div>

    </>
  )
}

export default App
