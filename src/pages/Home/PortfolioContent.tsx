import React from 'react'
import { StyledPortfolioContent } from '../../styles/Home/PortfolioContent.styled'
import { PortfolioContentProps } from './props'
import DesignInfo from '../../components/DesignInfo'
import InfoImageGroup from '../../components/InfoImageGroup'

const PortfolioContent: React.FC<PortfolioContentProps> = ({designInfoProps, infoImageGroupProps, styles}) => {
  return (
    <StyledPortfolioContent $styles = {styles}>
        <DesignInfo {...designInfoProps} />
        <InfoImageGroup {...infoImageGroupProps} />
    </StyledPortfolioContent>
  )
}

export default PortfolioContent