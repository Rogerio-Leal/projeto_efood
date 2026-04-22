import { Container, Logo, Links, Texto } from './styles'
import logoImg from '../../assets/images/logo.png'

import instagramImg from '../../assets/images/instagram_logo.png'
import facebookImg from '../../assets/images/facebook_logo.png'
import twitterImg from '../../assets/images/twitter_logo.png'

export const Footer = () => (
  <Container>
    <Logo src={logoImg} alt="eFood" />

    <Links>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagramImg} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookImg} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={twitterImg} alt="Twitter" />
        </a>
      </li>
    </Links>

    <Texto>
      A eFood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </Container>
)
