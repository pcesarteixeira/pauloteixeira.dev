import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleSection = styled.h2`
  margin: 60px auto 0 auto;
  padding: 0px 25px 0 25px;
  max-width: 1200px;
  font-size: 32px;
  color: var(--highlightText);
`

export const Works = styled.div`
  margin: 30px auto 0 auto;
  padding: 0px 25px 0 25px;
  max-width: 1200px;
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
  `}

  img {
    border: 2px solid #e4e4e4;
  }
`

export const PanelDetails = styled.div`
  color: var(--textNormal);
  flex: 1;

  ${media.lessThan("medium")`
    margin-bottom: 20px;
  `}

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

// export const Posts = styled.div`
//   display: grid;
//   grid-gap: 30px;
//   grid-template-columns: repeat(3, 1fr);
//   padding: 0px 25px 0 25px;
//   position: relative;
//   margin: 30px auto 0 auto;
//   max-width: 1200px;

//   ${media.lessThan("medium")`
//     grid-template-columns: repeat(1, 1fr);
//   `}

//   ${media.between("medium", "large")`
//     grid-template-columns: repeat(2, 1fr);
//   `}
// `