import { ButtonComponent } from "./styles"
import ButtonProps from "./types"
export default function Button({
  name="ДО ЗІРКИ",
  type = "button",
  onClick = () => {},
  style,
}: ButtonProps) {
  return (
    <ButtonComponent type={type} onClick={onClick} style={style}>
      {name}
    </ButtonComponent>
  )
}
