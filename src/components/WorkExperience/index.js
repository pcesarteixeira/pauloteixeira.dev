import React from "react"
import { Link } from "gatsby"

import * as S from './styled'

export default function WorkExperience(props) {
  return (
    <>
      <S.TitleSection>Work Experience</S.TitleSection>
      <S.Works>
        
        <S.Work>
          <S.TimePlace>
            <div className="place">Curitiba, Brasil</div>
            <div className="time">Set'2019 - <span>Hoje</span></div>
          </S.TimePlace>
          <S.Image>
          <img 
            style={{
              maxWidth: 75,
              maxHeight: 75,
              marginBottom: 0,
              borderRadius: `50%`,
            }}
            alt="Paulo Teixeira"
            src="/img/velsis.png"
          />
          </S.Image>
          <S.PanelDetails>
            <div className="head-details"><span className="responsibility">Front-end Developer</span> - <a href="http://www.velsis.com.br" target="_blank" className="company">Velsis</a></div>
            <div>Velsis é uma empresa focada no desenvolvimento de soluções para mobilidade urbana. No momento estou trabalhando com o desenvolvimento de projetos utilizando <span className="techTag">#Angular</span>.</div>
          </S.PanelDetails>
        </S.Work>

        <S.Work>
          <S.TimePlace>
            <div className="place">Curitiba, Brasil</div>
            <div className="time">Set'2017 - Set'2019</div>
          </S.TimePlace>
          <S.Image>
          <img 
            style={{
              maxWidth: 75,
              maxHeight: 75,
              marginBottom: 0,
              borderRadius: `50%`,
            }}
            alt="Paulo Teixeira"
            src="/img/rentcars.png"
          />
          </S.Image>
          <S.PanelDetails>
            <div className="head-details"><span className="responsibility">Software Developer</span> - <a href="http://rentcars.com" target="_blank" className="company">Rentcars.com</a></div>
            <div>Rentcars.com é uma OTA global especializada em aluguel de carros em mais de 160 países. Durante o período trabalhava com o desenvolvimento de novos projetos utilizando <span className="techTag">#Vue.js</span> e na manutenção de projetos já existentes jeitos em <span className="techTag">#PHP</span>.</div>
          </S.PanelDetails>
        </S.Work>

        <S.Work>
          <S.TimePlace>
            <div className="place">Curitiba, Brasil</div>
            <div className="time">Out'2015 - Set'2017</div>
          </S.TimePlace>
          <S.Image>
          <img 
            style={{
              maxWidth: 75,
              maxHeight: 75,
              marginBottom: 0,
              borderRadius: `50%`,
            }}
            alt="Paulo Teixeira"
            src="/img/clikss.png"
          />
          </S.Image>
          <S.PanelDetails>
            <div className="head-details"><span className="responsibility">Full-stack Developer</span> - <a href="https://clikssbrasil.com.br" target="_blank" className="company">Clikss Brasil</a></div>
            <div>Agência focada em Marketing Digital, durante o período de trabalho lá trabalhei em projetos envolvendo tecnologias como <span className="techTag">#PHP</span> e <span className="techTag">#Javascript</span>, aplicado especificamente em <span className="techTag">#Wordpress</span> e <span className="techTag">#Laravel</span>.</div>
          </S.PanelDetails>
        </S.Work>

      </S.Works>
    </>
  )
}