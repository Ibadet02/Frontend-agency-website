import React from 'react'
import { StyledMainDescription } from '../styles/components/MainDescription.styled'
import { MainDescriptionProps } from './props'

const MainDescription: React.FC<MainDescriptionProps> = ({text, styles}) => {
  return (
    <StyledMainDescription $styles = {styles}>
        {text}
    </StyledMainDescription>
  )
}

export default MainDescription