import { HeaderPerfil } from '../../components/HeaderPerfil'
import { Banner } from '../../components/Banner'
import { ProductList } from '../../components/ProductList'
import { Footer } from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../models'

export const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ProductList pratos={restaurante.cardapio} />
      <Footer />
    </>
  )
}
