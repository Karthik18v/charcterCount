import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
`

export const CountersImageContainer = styled.div`
  background-color: #ffc533;
  width: 40vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
  height: 90vh;
`

export const Heading = styled.h1`
  color: ${props => (props.outline ? '#ffc533' : 'black')};
`

export const InputContainer = styled.div`
  background-color: black;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  align-items: center;
`
export const InputBox = styled.input`
  width: 50%;
  margin: 10px;
`

export const Button = styled.button`
  background-color: #ffc533;
  border: 0px;
  padding: 5px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
`

export const InputBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  align-self: center;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
`
export const CharacterCountContainer = styled.ul`
  background-color: transparent;
  display: flex;
  list-style-type: none;
  flex-direction: column;
`
