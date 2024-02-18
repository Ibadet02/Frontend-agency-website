

import { StyledConstruction } from '../../styles/components/Construction/index.styled';
import ConstructionContent from './ConstructionContent';
import { ConstructionProps } from './props';

const Construction: React.FC<ConstructionProps> = ({text}) => {
  return (
    <StyledConstruction>
        <ConstructionContent text={text} />
    </StyledConstruction>
  )
}

export default Construction;