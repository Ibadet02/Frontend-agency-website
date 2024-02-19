import { css } from "styled-components";
import { DesignInfoWrapperProps } from "../components/props";
// import { ImageProps } from "../components/Banner/props";
// import frontEndDev from "../assets/images/robert.jpg";

export const aboutDesignInfoWrappers: Record<string, DesignInfoWrapperProps> = {
  first: {
    designInfoProps: {
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
        text: "Information about us.",
        styles: css``,
      },
    },
  },
};

// export const aboutImagesProps: Record<string, ImageProps> = {
//   first: {
//     src: frontEndDev,
//     alt: "Robert",
//     id: 0,
//     className: "image-1",
//     isCircle: true,
//     imageCaptionProps: {
//       styles: css`
//         position: absolute;
//         width: 100%;
//         bottom: -1.5rem !important;
//         .caption-text {
//           width: 70%;
//           background-color: #fff;
//           padding: 0.6rem;
//           border-radius: 0.7rem;
//         }
//       `,
//       headingProps: {
//         text: "Robert",
//         styles: css`
//           color: #000;
//         `,
//       },
//       descriptionProps: {
//         text: "CEO",
//       },
//     },
//     styles: css`
//       position: relative;
//       /* width: 20rem; */
//       img{
//         /* border-radius: 1rem !important; */
//       }
//     `,
//   },
//   second: {
//     src: frontEndDev,
//     alt: "Ibadet Ismayilov",
//     id: 0,
//     className: "image-1",
//     isCircle: true,
//     imageCaptionProps: {
//       styles: css`
//         position: absolute;
//         width: 100%;
//         bottom: -1.5rem !important;
//         .caption-text {
//           width: 70%;
//           background-color: #fff;
//           padding: 0.6rem;
//           border-radius: 0.7rem;
//         }
//       `,
//       headingProps: {
//         text: "Ibadet Ismayilov",
//         styles: css`
//           color: #000;
//         `,
//       },
//       descriptionProps: {
//         text: "Frontend Developer",
//       },
//     },
//     styles: css`
//       position: relative;
//       /* width: 20rem; */
//       img{
//         /* border-radius: 1rem !important; */
//       }
//     `,
//   },
// };
