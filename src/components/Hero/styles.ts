import styled from 'styled-components'
import { cores } from '../../styles'

import bannerImage from '../../assets/images/fundo_banner.png'

export const HeroContainer = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-top: 64px;
`

export const Text = styled.p`
  font-size: 36px;
  color: ${cores.principal};
  font-weight: bold;
  margin-top: 140px;
  max-width: 540px;
  text-align: center;
`
