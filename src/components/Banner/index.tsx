import { BannerContainer, BannerContent } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

export const Banner = ({ capa, tipo, titulo }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
    <BannerContent>
      <span>{tipo}</span>
      <h2>{titulo}</h2>
    </BannerContent>
  </BannerContainer>
)
