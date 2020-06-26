import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleSection = styled.h2`
  margin: 60px auto 0 auto;
  padding: 0px 25px 0 25px;
  max-width: 1200px;
  font-size: 32px;
  color: var(--highlightText);
  display: flex;
  align-items: center;
`

export const Works = styled.div`
  margin: 30px auto 0 auto;
  padding: 0px 25px 0 25px;
  max-width: 1200px;
  position: relative;

  &::after {
    content: '';
    background: #e4e4e4;
    width: 2px;
    height: calc(100% - 75px);
    position: absolute;
    z-index: -1;
    top: 37.5px;
    left: 242px;
  }

  ${media.lessThan("medium")`
    &::after { display: none; }
  `}
`

export const Work = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const TimePlace = styled.div`
  margin-right: 20px;
  width: 160px;
  color: var(--textNormal);

  ${media.lessThan("medium")`
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    order: 2;
  `}

  .time {
    color: var(--textNormal);
    opacity: 0.5;

    span {
      color: var(--textLink);
    }
  }
`

export const Image = styled.div`
  display: flex;
  margin-right: 20px;

  ${media.lessThan("medium")`
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    order: 1;
  `}

  img {
    border: 4px solid #e4e4e4;

    &.active {
      border-color: var(--textLink);
    }
  }
`

export const PanelDetails = styled.div`
  color: var(--textNormal);
  flex: 1;

  ${media.lessThan("medium")`
    margin-bottom: 20px;
    order: 3;
  `}

  .main-activities {
    margin-top: 10px;

    ul {
      margin-left: 20px;
    }
  }

  span.techTag {
    font-weight: bold;
    color: var(--highlightText);
  }

  .head-details {
    margin-bottom: 5px;

    .responsibility {
      font-weight: bold;
      color: var(--highlightText);
    }

    .company {
      font-weight: bold;
      color: var(--textLink);
    }
  }
`