import { useState } from "react"
import {
  SelectorContainer,
  LanguageButton,
  Dropdown,
  LanguageOption,
} from "./styles"

const languages = ["UA", "RU", "ENG"]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  return (
    <SelectorContainer>
      <LanguageButton
        onClick={toggleDropdown}
        onMouseDown={e => e.preventDefault()}
      >
        {selectedLanguage}
      </LanguageButton>
      {isOpen && (
        <Dropdown>
          {languages.map(language => (
            <LanguageOption
              key={language}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </LanguageOption>
          ))}
        </Dropdown>
      )}
    </SelectorContainer>
  )
}
