import React, { useContext } from 'react'
import { ImgIconStyled, ImageContainer, DivRed, ImgLogo, DivStyled } from '../styles/FooterStyle'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {state} = useContext(ContextGlobal);

  const filter = state.theme === "LIGTH"? 0 : 100;

  return (
    <footer>
      <DivRed>
        {/* No se distingue que es lo que está escrito en el gif de ejemplo  */}
        <p>Inintelegible</p>
      </DivRed>
      <DivStyled>
        <p>Powered by</p>
        <ImgLogo   src="./images/DH.png" alt='DH-logo' colorImg={state.theme === "LIGTH"? 100 : 0}/>
        <ImageContainer>
          <div>
            <ImgIconStyled colorImg={filter} src="./images/ico-facebook.png" alt="" />
            <ImgIconStyled colorImg={filter} src="./images/ico-instagram.png" alt="" />
            <ImgIconStyled colorImg={filter} src="./images/ico-tiktok.png" alt="" />
            <ImgIconStyled colorImg={filter} src="./images/ico-whatsapp.png" alt="" />
          </div>
        </ImageContainer>
      </DivStyled>
    </footer>
  )
}

export default Footer
