import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`

export const Texto = styled.p`
  font-size: 10px;
  color: ${cores.principal};
  text-align: center;
  max-width: 480px;
`
