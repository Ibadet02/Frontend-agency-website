import { css } from "styled-components";
import { DesignInfoProps } from "../components/props";
// import { ImageProps } from "../components/Banner/props";
// import frontEndDev from "../assets/images/robert.jpg";
export const aboutDesignInfoProps: Record<string, DesignInfoProps> = {
  first: {
    styles: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    contentHeadingProps: {
      tagName: "h2",
      children: "About us",
      styles: css`
        font-size: 3rem;
      `,
    },
    descriptionProps: {
      text: "Discover a few facts about us!",
      styles: css``,
    },
    flexBasis: "auto",
  },
};