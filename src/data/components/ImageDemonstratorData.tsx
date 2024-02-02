import frontEndDev from "../../assets/images/frontend-dev.jpg";
import backEndDev from "../../assets/images/backend-dev.jpg";
import fullStackDev from "../../assets/images/full_stack-dev.jpg";
import { css } from "styled-components";
export const imageDemonstratorData = {
  homeBanner: [
    {
      src: frontEndDev,
      alt: "FrontEnd Developer",
      id: 0,
      className: "img-1",
      isCircle: false,
      styles: css`
        width: 15rem;
      `,
    },
    {
      src: backEndDev,
      alt: "BackEnd Developer",
      id: 1,
      className: "img-2",
      isCircle: false,
      styles: css`
        width: 15rem;
        margin-top: 4rem;
      `,
    },
    {
      src: fullStackDev,
      alt: "Full-Stack Developer",
      id: 2,
      className: "img-3",
      isCircle: false,
      styles: css`
        width: 15rem;
      `,
    },
  ],
};
