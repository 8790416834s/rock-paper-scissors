import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameList from './components/GameList'
import {
  RockPaperContainer,
  ScoreCardContainer,
  ItemsContainer,
  MainHeading,
  Item,
  ScoreContainer,
  GameContainer,
  PopUp,
  Image,
  RulesContainer,
  ResultContainer,
  YouContainer,
  CandidateContainer,
  PlayButtonContainer,
  PlayButton,
} from './styledComponent'

import './App.css'

const initialChoicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    choicesList: initialChoicesList,
    you: '',
    opponent: '',
    gameShow: false,
    result: '',
    score: 0,
  }

  clickIcon = id => {
    this.setState({gameShow: true})
    const {choicesList} = this.state
    const randomNumber = Math.floor(Math.random() * 4)
    let opponentId
    if (randomNumber === 1) {
      opponentId = choicesList[0].id
    } else if (randomNumber === 2) {
      opponentId = choicesList[1].id
    } else {
      opponentId = choicesList[2].id
    }

    if (opponentId === id) {
      const opponentImage = choicesList.find(each =>
        each.id === opponentId ? each : 'opponent',
      )
      const youImage = choicesList.find(each => (each.id === id ? each : 'you'))

      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        opponent: opponentImage,
        you: youImage,
      }))
    } else if (opponentId !== id) {
      const opponentImage = choicesList.find(each =>
        each.id === opponentId ? each.imageUrl : 'opponent',
      )
      const youImage = choicesList.find(each =>
        each.id === id ? each.imageUrl : 'you',
      )

      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        opponent: opponentImage,
        you: youImage,
      }))
    } else {
      const opponentImage = choicesList.find(each =>
        each.id === opponentId ? each.imageUrl : 'opponent',
      )
      const youImage = choicesList.find(each =>
        each.id === id ? each.imageUrl : 'you',
      )

      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
        opponent: opponentImage,
        you: youImage,
      }))
    }
  }

  playAgain = () => {
    this.setState({gameShow: false, score: 0})
  }

  render() {
    const {choicesList} = this.state
    const {gameShow, you, opponent, score, result} = this.state
    return (
      <RockPaperContainer>
        <ScoreCardContainer>
          <ItemsContainer>
            <MainHeading>ROCK</MainHeading>
            <MainHeading>PAPER</MainHeading>
            <MainHeading>SCISSORS</MainHeading>
          </ItemsContainer>
          <ScoreContainer>
            <Item>Score</Item>
            <Item>{score}</Item>
          </ScoreContainer>
        </ScoreCardContainer>
        {gameShow ? (
          <ResultContainer>
            <YouContainer>
              <CandidateContainer>
                <Item>YOU</Item>
                <Image src={you.imageUrl} alt="item" height="200" width="200" />
              </CandidateContainer>
              <CandidateContainer>
                <Item>OPPONENT</Item>
                <Image
                  src={opponent.imageUrl}
                  alt="item"
                  height="200"
                  width="200"
                />
              </CandidateContainer>
            </YouContainer>
            <PlayButtonContainer>
              <Item>{result}</Item>
              <PlayButton type="button" onClick={this.playAgain}>
                PLAY AGAIN
              </PlayButton>
            </PlayButtonContainer>
          </ResultContainer>
        ) : (
          <GameContainer>
            {choicesList.map(each => (
              <GameList key={each.id} game={each} clickIcon={this.clickIcon} />
            ))}
          </GameContainer>
        )}
        <Popup modal trigger={<PopUp type="button">Rules</PopUp>}>
          {close => (
            <>
              <RulesContainer>
                <RiCloseLine onClick={() => close()} />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  height="500"
                  width="800"
                />
              </RulesContainer>
            </>
          )}
        </Popup>
      </RockPaperContainer>
    )
  }
}
export default App
