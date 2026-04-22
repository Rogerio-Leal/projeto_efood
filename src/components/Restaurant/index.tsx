import { Link } from 'react-router-dom'

import {
  Card,
  CardImage,
  TagContainer,
  Tag,
  InfoContainer,
  TitleContainer,
  Description,
  Button,
  StarIcon
} from './styles'

import StarImage from '../../assets/images/estrela.png'

type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export const Restaurant = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <CardImage src={capa} alt={titulo} />
    <TagContainer>
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </TagContainer>
    <InfoContainer>
      <TitleContainer>
        <h3>{titulo}</h3>
        <div>
          <span>{avaliacao}</span>
          <StarIcon src={StarImage} alt="Estrela" />
        </div>
      </TitleContainer>
      <Description>{descricao}</Description>
      <Button as={Link} to="/perfil">
        Saiba mais
      </Button>
    </InfoContainer>
  </Card>
)
