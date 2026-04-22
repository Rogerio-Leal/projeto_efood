import styled from 'styled-components'

import TrattoriaImg from '../../assets/images/banner_trattoria.png'

export const BannerContainer = styled.div`
  background-image: url(${TrattoriaImg});
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContent = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 24px 20px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  span {
    font-weight: 100;
    font-size: 32px;
    color: #fff;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    color: #fff;
  }
`
