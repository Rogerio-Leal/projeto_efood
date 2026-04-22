import { HeroContainer, Text, Logo } from './styles'

import logoImage from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <Logo src={logoImage} alt="eFood" />
    <div>
      <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </div>
  </HeroContainer>
)

export default Hero
