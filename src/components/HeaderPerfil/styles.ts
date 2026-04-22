import styled from 'styled-components'

import BannerImg from '../../assets/images/fundo_banner.png'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${BannerImg});
  background-size: cover;
  padding: 64px 0;
  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a,
  span {
    font-weight: 900;
    font-size: 18px;
    color: ${cores.principal};
    text-decoration: none;
  }
`

export const Logo = styled.img`
  width: 125px;
`
