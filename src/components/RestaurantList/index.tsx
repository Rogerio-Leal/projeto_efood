import { useEffect, useState } from 'react'
import { Restaurant } from '../Restaurant'
import { ListContainer } from './styles'
import { Restaurante } from '../../models'

export const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <ListContainer>
      {restaurantes.map((restaurante) => (
        <Restaurant
          key={restaurante.id}
          id={restaurante.id}
          titulo={restaurante.titulo}
          destacado={restaurante.destacado}
          tipo={restaurante.tipo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
        />
      ))}
    </ListContainer>
  )
}
