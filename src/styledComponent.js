import styled from 'styled-components'

export const RockPaperContainer = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`
export const ScoreCardContainer = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-right: 350px;
  margin-left: 350px;
`
export const ItemsContainer = styled.div`
  font-family: 'Bree Serif';
`
export const MainHeading = styled.h1``
export const Item = styled.p`
  text-align: center;
`
export const ScoreContainer = styled.div`
  font-family: 'Bree Serif';
  font-size: 24px;
  background-color: #ffffff;
  color: #223a5f;
  padding-left: 20px;
  padding-right: 20px;
`
export const GameContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`
export const PopUp = styled.button`
  font-family: 'Bree Serif';
  font-size: 24px;
  background-color: #ffffff;
  color: #223a5f;
  align-self: flex-end;
`
export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-top: 20px;
`
export const RulesContainer = styled.div`
  background-color: #ffffff;
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultContainer = styled.div``
export const YouContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const CandidateContainer = styled.div`
  margin: 40px;
`
export const PlayButtonContainer = styled.div`
  text-align: center;
`
export const PlayButton = styled.button``
