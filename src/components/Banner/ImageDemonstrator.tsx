import Image from "./Image";
import { StyledImageDemonstrator } from "../../styles/components/Banner/ImageDemonstrator.styled";
import { ImageDemonstratorProps } from "./props";
const ImageDemonstrator: React.FC<ImageDemonstratorProps> = ({
  imagesProps,
  styles,
}) => {
  return (
    <StyledImageDemonstrator $styles={styles}>
      {imagesProps.map((imageProps) => {
        return <Image key={imageProps.id} {...imageProps} />;
      })}
    </StyledImageDemonstrator>
  );
};

export default ImageDemonstrator;
