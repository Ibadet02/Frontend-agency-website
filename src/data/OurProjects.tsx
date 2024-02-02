import { css } from "styled-components";
import frontEndDev from "../assets/images/frontend-dev.jpg";
import backEndDev from "../assets/images/backend-dev.jpg";
import fullStackDev from "../assets/images/full_stack-dev.jpg";
import workingProcess from "../assets/images/working-process.png";
import typoDesign from "../assets/images/typo-design.png";
import { DesignInfoWrapperProps } from "../components/props";
import { BannerProps } from "../components/Banner/props";
import { PortfolioProps } from "../pages/Home/props";

export const ourProjectsDesignInfoWrappers: Record<
  string,
  DesignInfoWrapperProps
> = {
  first: {
    designInfoProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      `,
      contentHeadingProps: {
        tagName: "h2",
        children: "Service Details",
        styles: css`
          font-size: 3rem;
        `,
      },
      descriptionProps: {
        text: "we can help you to build your dream website and app.",
        styles: css``,
      },
    },
  },
  second: {
    styles: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    `,
    designInfoProps: {
      img: {
        src: workingProcess,
        alt: "Working Process",
      },
      smallHeadingProps: {
        text: "Why choose us?",
      },
      contentHeadingProps: {
        tagName: "h2",
        to: "/",
        children: "Experienced, Creative, and Helpful",
        styles: css``,
      },
      styles: css`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
      `,
    },
    designInfoGroupProps: {
      designInfosProps: [
        {
          id: 0,
          numberedOrderProps: {
            numberContent: "01",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "+26 years experience",
            styles: css``,
          },
          descriptionProps: {
            text: "We have been in the industry for 26 years and have succesfully launched over 800 websites and 150 mobile applications.",
            styles: css``,
          },
          styles: css`
            /* width: 12rem; */
            /* flex: 1; */
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          `,
        },
        {
          id: 1,
          numberedOrderProps: {
            numberContent: "02",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Creative Team",
            styles: css``,
          },
          descriptionProps: {
            text: "We are the create team that brings your ideas to life.",
            styles: css``,
          },
          styles: css`
            /* width: 12rem; */
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          `,
        },
        {
          id: 2,
          numberedOrderProps: {
            numberContent: "03",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "We are helpful",
            styles: css``,
          },
          descriptionProps: {
            text: "We love to help clients to achieve their online goals.",
            styles: css``,
          },
          styles: css`
            /* width: 12rem; */
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          `,
        },
        {
          id: 3,
          numberedOrderProps: {
            numberContent: "04",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Performance",
            styles: css``,
          },
          descriptionProps: {
            text: "Enterprise definition is - a project or undertaking that is especially difficult, complicated, or risky. How to use enterprise in a sentence. Synonym Discussion of enterprise.",
            styles: css``,
          },
          styles: css`
            /* width: 12rem; */
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          `,
        },
      ],
      styles: css`
        display: flex;
        justify-content: space-between;
        text-align: left;
        gap: 1rem;
        @media screen and (max-width: 820px) {
          flex-direction: column;
        }
      `,
    },
  },
};

export const ourProjectsBanners: Record<string, BannerProps> = {
  first: {
    styles: css`
      align-items: center;
      gap: 1rem;
      @media screen and (max-width: 820px) {
        flex-direction: column;
        text-align: center;
      }
    `,
    designInfoProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (max-width: 820px) {
          align-items: center;
        }
      `,
      smallHeadingProps: {
        text: "Best in the field",
      },
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "We are digital products creators",
      },
      descriptionProps: {
        styles: css``,
        text: "This is a description",
      },
      actionLinkProps: {
        styles: css``,
        title: "Let's Get Started",
        path: "/",
        icon: "",
      },
    },
    imageDemonstratorProps: {
      imagesProps: [
        {
          src: frontEndDev,
          alt: "FrontEnd Developer",
          id: 0,
          className: "img-1",
          isCircle: true,
          styles: css`
            width: 15rem;
            align-self: flex-end;
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
        {
          src: frontEndDev,
          alt: "FrontEnd Developer",
          id: 3,
          className: "img-4",
          isCircle: true,
          styles: css`
            width: 15rem;
          `,
        },
      ],
      styles: css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        @media screen and (max-width: 600px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `,
    },
  },
};

export const ourProjectsPortfolio: Record<string, PortfolioProps> = {
  first: {
    styles: css`
      display: flex;
      align-items: center;
    `,
    designInfoProps: {
      styles: css`
        text-align: center;
        flex-basis: 50%;
        text-align: left;
      `,
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "Check our awesome portfolio",
      },
      descriptionProps: {
        styles: css``,
        text: "See what we do for our clients.",
      },
    },
    infoImageGroupProps: {
      styles: css`
        flex: 1;
        img {
          width: 100%;
          border-radius: 1rem;
        }
      `,
      infoImagesProps: [
        {
          styles: css``,
          img: {
            src: typoDesign,
            alt: "Typo Design",
          },
          id: 0,
        },
      ],
    },
  },
  second: {
    styles: css`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    `,
    designInfoProps: {
      styles: css`
        text-align: center;
        flex-basis: 50%;
        text-align: left;
      `,
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "Check our awesome portfolio",
      },
      descriptionProps: {
        styles: css``,
        text: "See what we do for our clients.",
      },
    },
    infoImageGroupProps: {
      styles: css`
        flex: 1;
        img {
          width: 100%;
          border-radius: 1rem;
        }
      `,
      infoImagesProps: [
        {
          styles: css``,
          img: {
            src: typoDesign,
            alt: "Typo Design",
          },
          id: 0,
        },
      ],
    },
  },
};
