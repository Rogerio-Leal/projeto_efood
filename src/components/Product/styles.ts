import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.principal};
  color: #ffebd9;
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: #ffebd9;
  color: ${cores.principal};
  border: none;
  padding: 4px 0;
  font-weight: 900;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`
