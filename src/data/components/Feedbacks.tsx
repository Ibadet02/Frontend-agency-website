import { css } from "styled-components";
import { FeedbacksProps } from "../../components/props";
import frontEndDev from "../../assets/images/frontend-dev.jpg";
import backEndDev from "../../assets/images/backend-dev.jpg";
import stars from "../../assets/images/stars.png";
export const feedbacks: FeedbacksProps = {
  styles: css``,
  feedbacksControllerProps: {
    styles: css``,
    img: {
      src: stars,
      alt: "Stars",
    },
    smallHeadingProps: {
      text: "Testimonial",
    },
    contentHeadingProps: {
      styles: css`
        font-size: 2rem;
      `,
      tagName: "h2",
      children: "What our clients say about us",
    },
  },
  feedbackGroupProps: {
    styles: css``,
    feedbacksProps: [
      {
        styles: css``,
        numberedOrderProps: {
          styles: css``,
          numberContent: `"`,
        },
        description1Props: {
          styles: css``,
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        img: {
          src: frontEndDev,
          alt: "User",
        },
        headingProps: {
          styles: css``,
          text: "Theressa Jhonson",
        },
        description2Props: {
          styles: css``,
          text: "Product Manager",
        },
        ratingProps: {
          styles: css``,
          rating: 0,
        },
        id: 0,
      },
      {
        styles: css``,
        numberedOrderProps: {
          styles: css``,
          numberContent: `"`,
        },
        description1Props: {
          styles: css``,
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        },
        img: {
          src: backEndDev,
          alt: "User",
        },
        headingProps: {
          styles: css``,
          text: "Tarron Rop",
        },
        description2Props: {
          styles: css``,
          text: "CEO",
        },
        ratingProps: {
          styles: css``,
          rating: 0,
        },
        id: 1,
      },
    ],
  },
};
