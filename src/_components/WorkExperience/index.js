import React from "react"
import { Link } from "gatsby"

import * as S from './styled'

export default function WorkExperience(props) {
  return (
    <>
      <S.TitleSection>
        <img 
          style={{
            maxWidth: 40,
            maxHeight: 40,
            marginRight: 10,
          }}
          alt="Paulo Teixeira"
          src="/img/briefcase-emoji.png"
        />
        Work Experience
      </S.TitleSection>
      <S.Works>

        <S.Work>
          <S.TimePlace>
            <div className="place">Curitiba, Brasil</div>
            <div className="time">Dez'2019 - <span>Hoje</span></div>
          </S.TimePlace>
          <S.Image>
          <img 
            className="active"
            style={{
              maxWidth: 75,
              maxHeight: 75,
              marginBottom: 0,
              borderRadius: `50%`,
            }}
            alt="Paulo Teixeira"
            src="/img/wepayout.png"
          />
          </S.Image>
          <S.PanelDetails>
            <div className="head-details"><span className="responsibility">Front-end Developer</span> - <a href="https://wepayout.co" target="_blank" className="company">WePayout</a></div>
            <div>A WePayout é uma empresa de pagamentos massiva, comprometida em atender às metas de negócios de nossos clientes.</div>
            <div class="main-activities">
              <div>Principais atividades:</div>
              <ul>
                <li>Desenvolvimento de aplicativos mobile utilizando <span className="techTag">#ReactNative</span>.</li>
              </ul>
            </div>
          </S.PanelDetails>
        </S.Work>
        
        <S.Work>
          <S.TimePlace>
            <div className="place">Curitiba, Brasil</div>
            <div className="time">Set'2019 - Dez'2019</div>
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
            <div>Velsis é uma empresa focada no desenvolvimento de soluções de alta tecnologia para a área de ITS (Intelligent Transportation System). Neste segmento o seu foco está em soluções para fiscalização de trânsito, desobediência ao semáforo vermelho e de identificação de veículos através do reconhecimento automático de placas por OCR (Optical Character Recognition).</div>
            <div class="main-activities">
              <div>Principais atividades:</div>
              <ul>
                <li>Desenvolvimento de novas soluções web utilizando <span className="techTag">#Angular</span>.</li>
                <li>Desenvolvimento de micro serviços com <span className="techTag">#NodeJS</span>.</li>
              </ul>
            </div>            
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
            <div>A Rentcars.com, uma OTA global especializada em aluguel de carros, permite que seus clientes comparem diferentes tarifas de locadoras em mais de 160 países e façam reservas on-line.</div>
            <div class="main-activities">
              <div>Principais atividades:</div>
              <ul>
                <li>Desenvolvimento de soluções utilizando <span className="techTag">#VueJS</span>.</li>
                <li>Manutenção e desenvolvimento de novas funcionalidades utilizando <span className="techTag">#PHP</span> (Symfony and CodeIgniter).</li>
              </ul>
            </div>
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
            <div>Clikss Brasil é uma agência multidisciplinar atuando no Marketing Digital com foco em planejamento web, desenvolvimento de sites e hotsites promocionais, criando e gerenciando campanhas online.</div>
            <div class="main-activities">
              <div>Principais atividades:</div>
              <ul>
                <li>Desenvolvimento de projetos utilizando <span className="techTag">#Laravel</span>.</li>
                <li>Desenvolvimento e manutenção em projetos utilizando <span className="techTag">#Wordpress</span>.</li>
              </ul>
            </div>
          </S.PanelDetails>
        </S.Work>

      </S.Works>
    </>
  )
}