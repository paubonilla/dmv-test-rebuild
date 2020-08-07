import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const AppInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 480px) {
    max-width: 300px;
  }
  @media (max-width: 320px) {
    max-width: 250px;
  }
  display: flex;
  flex-direction: column;
  h1 {
    @media (max-width: 480px) {
      font-size: 28px;
    }
    @media (max-width: 320px) {
      font-size: 24px;
    }
    line-height: 1.2;
    color: #194059;
    margin-bottom: 24px;
  }
  button {
    margin-top: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
background: #AABE7A;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      display: block;
      border: 1px solid darkgray;
      border-radius: 4px;
      padding: 8px;
      margin: 8px 0;
      cursor: pointer;
      transition: 0.4s ease;
      strong {
        transition: 0.4s ease;
      }
      
    }
    li.isSelected {
      strong {
        color: #283618;
        background-color: #BFCDD9;
      }
      color: #283618;
      background-color: #BFCDD9;
    }
    li.isCorrect {
      strong {
        color: black;
      }
      color: black;
      background-color: white;
    }
  }
  span {
    color: #5E8BA5;
    display: flex;
    margin-bottom: 5px;
    flex-direction: column;
    justify-content: space-around;
    &::selection {
      color: #194059;
    }
  }
`