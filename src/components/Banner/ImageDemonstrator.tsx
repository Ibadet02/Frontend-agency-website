import Image from "./Image";
import { StyledImageDemonstrator } from "../../styles/components/Banner/ImageDemonstrator.styled";
import { ImageDemonstratorProps } from "./props";
const ImageDemonstrator: React.FC<ImageDemonstratorProps> = ({
  imagesProps,
  flexBasis,
  styles,
}) => {
  return (
    <StyledImageDemonstrator className="imageDemonstrator" $styles={styles} $flexBasis={flexBasis}>
      {imagesProps.map((imageProps) => {
        return <Image key={imageProps.id} {...imageProps} />;
      })}
    </StyledImageDemonstrator>
  );
};

export default ImageDemonstrator;
