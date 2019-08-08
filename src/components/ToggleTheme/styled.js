import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperToggle = styled.div`
  display: flex;

  .circle {
    background: linear-gradient(40deg, #FF0080,#FF8C00 70%);
    border-radius: 100%;
    height: 30px;
    margin: auto;
    position: relative;
    width: 30px;

    .crescent {
      background: white;
      border-radius: 100%;
      height: 24px;
      position: absolute;
      right: 0;
      transform: scale(0);
      transform-origin: top right;
      transition: transform .6s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 24px;
    }  
  }

  label.swipe {
    width: 140px;
    background: rgba(0,0,0,.1);
    border-radius: 100px;
    position: relative;
    margin-left: 20px;
    cursor: pointer;
  }

  label.swipe {
    ${media.lessThan("small")`
      display: none;
    `}
  }

  .toggle {
    position: absolute;
    width: 50%;
    border-radius: 100px;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0,0,0,.15);
    transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .names {
    width: 100%;
    position: absolute;
    display: flex;
    height: 30px;
    font-size: 14px;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    > div {
      width: 50%;
      text-align: center;
    }
  }

  .dark {
    opacity: .5;
  }

  [type="checkbox"] {
    display: none;
  }

  [type="checkbox"]:checked ~ label.swipe {
    background: rgba(0,0,0,.2) !important;
  }

  [type="checkbox"]:checked + label .circle .crescent {
    transform: scale(1);
    background: var(--background) !important;
  }

  [type="checkbox"]:checked + label .circle {
    background: linear-gradient(40deg, #8983F7, #A3DAFB 70%);
  }

  [type="checkbox"]:checked ~ label .toggle {
    transform: translateX(100%);
    background-color: #424750;
  }

  [type="checkbox"]:checked ~ label {
    color: #fff;
  }

  [type="checkbox"]:checked ~ label .dark {
    opacity: 1;
  }

  [type="checkbox"]:checked ~ label .light {
    opacity: .5;
  }
`

export const Icon = styled.div`
  
`
