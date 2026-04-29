import styled from 'styled-components'
import { cores } from '../../styles'

import FecharImg from '../../assets/images/fechar.png'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 56px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: ${cores.principal};
  color: #ffebd9;
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  display: flex;
  gap: 24px;
  position: relative;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: #ffebd9;
    color: ${cores.principal};
    border: none;
    padding: 4px 16px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
    margin-top: auto;
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-image: url('${FecharImg}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
