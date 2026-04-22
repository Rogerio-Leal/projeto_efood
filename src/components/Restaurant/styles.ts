import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${cores.principal};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: ${cores.principal};
  color: #ffebd9;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
`

export const InfoContainer = styled.div`
  padding: 8px;
  border-top: 0;
  flex-grow: 1;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: ${cores.principal};
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const StarIcon = styled.img`
  width: 21px;
  height: 21px;
  object-fit: contain;
  vertical-align: middle;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.principal};
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${cores.principal};
  color: #ffebd9;
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
