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
  max-width: 600px;
  display: flex;
  flex-direction: column;
  h1 {
    line-height: 1.2;
    color: #333436;
    margin-bottom: 24px;
  }
  button {
    margin-top: 36px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        transition: 0.8s ease;
      }
    }
    li.isSelected {
      strong {
        color: gray;
      }
      color: gray;
      background-color: darkgray;
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
    display: flex;
    margin-bottom: 24px;
    flex-direction: column;
    justify-content: space-around;
  }
`