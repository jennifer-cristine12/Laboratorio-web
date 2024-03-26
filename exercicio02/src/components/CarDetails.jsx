import React from 'react'

const CarDetails = ({ marca, km, cor, ano }) => {
    return (
        <div>
            {
                km <= 0 ?
                    (<p>Carro novo</p>) :
                   
                        km>0 && km<20?
                        (<p>Carro seminovo</p>):
                        (<p>Carro usado</p>)
                    
            }
           
            <ul>
                <li>Marca: {marca}</li>
                <li>kilometros andados: {km} mil KM</li>
                <li>Cor do carro: {cor}</li>
                <li>Ano de fabricação: {ano}</li>

            </ul>


        </div>
    )
}

export default CarDetails
