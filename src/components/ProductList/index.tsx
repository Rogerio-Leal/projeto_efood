import { Product } from '../Product'
import { Container } from './styles'

import PizzaImg from '../../assets/images/pizza.png'

const pratos = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  },
  {
    id: 2,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  },
  {
    id: 3,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  },
  {
    id: 4,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  },
  {
    id: 5,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  },
  {
    id: 6,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: PizzaImg
  }
]

export const ProductList = () => (
  <Container>
    {pratos.map((prato) => (
      <Product
        key={prato.id}
        foto={prato.foto}
        nome={prato.nome}
        descricao={prato.descricao}
      />
    ))}
  </Container>
)
