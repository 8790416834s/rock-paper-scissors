import {IconContainer, IconButton, Image} from './styledComponents'

const GameList = props => {
  const {game, clickIcon} = props
  const {id, imageUrl} = game

  const onClickIcon = () => {
    clickIcon(id)
  }

  return (
    <IconContainer>
      <IconButton type="button" onClick={onClickIcon}>
        <Image src={imageUrl} alt="image" />
      </IconButton>
    </IconContainer>
  )
}
export default GameList
