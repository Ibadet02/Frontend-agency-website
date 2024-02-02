import React from 'react'
import { StyledPortfolio } from '../../styles/Home/Portfolio.styled'
import { PortfolioProps } from './props'
import PortfolioContent from './PortfolioContent'

const Portfolio: React.FC<PortfolioProps> = (portfolioContentProps) => {
  return (
    <StyledPortfolio>
        <PortfolioContent {...portfolioContentProps} />
    </StyledPortfolio>
  )
}

export default Portfolio