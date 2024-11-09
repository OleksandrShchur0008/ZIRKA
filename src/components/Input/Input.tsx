import { useState } from "react"
import {
  InputContainer,
  InputLabel,
  InputComponent,
  IconContainer,
  ErrorContainer,
} from "./styles"
import InputProps from "./types"
export default function Input({
  id,
  name,
  placeholder,
  label,
  type = "text",
  value,
  onChange,
  error,
}: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputComponent
        id={id}
        name={name}
        placeholder={placeholder}
        type={isPasswordVisible ? "text" : type}
        value={value}
        onChange={onChange}
        error={!!error}
      />
      {type === "password" && (
        <IconContainer
          onClick={togglePasswordVisibility}
          alt={isPasswordVisible ? "Hide password" : "Show password"}
        />
      )}
      {error && <ErrorContainer>{error}</ErrorContainer>}
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  )
}
