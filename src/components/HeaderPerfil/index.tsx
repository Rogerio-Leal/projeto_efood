import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/images/logo.png'

export const HeaderPerfil = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">Restaurantes</Link>
      <img src={logoImg} alt="eFood" />
      <span>0 produto(s) no carrinho</span>
    </HeaderContent>
  </HeaderContainer>
)
