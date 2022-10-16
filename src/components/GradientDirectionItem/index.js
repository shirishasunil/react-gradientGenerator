import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, clickGradientDirectionItem, isActive} = props
  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <Button isActive={isActive} onClick={onClickGradientDirectionItem}>
        {displayText}
      </Button>
    </ListItem>
  )
}
export default GradientDirectionItem
