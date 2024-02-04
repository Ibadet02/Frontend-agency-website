import { css } from "styled-components";
import frontEndDev from "../assets/images/frontend-dev.jpg";
import backEndDev from "../assets/images/backend-dev.jpg";
import fullStackDev from "../assets/images/full_stack-dev.jpg";
import webDesign from "../assets/images/web-design.png";
import appDesign from "../assets/images/app-design.png";
import uiUxDesign from "../assets/images/ui-ux-design.png";
import brandDesign from "../assets/images/brand-design.png";
import like from "../assets/images/like.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { BannerProps } from "../components/Banner/props";
import { DesignInfoWrapperProps } from "../components/props";
export const whatWeDoBanners: Record<string, BannerProps> = {
  first: {
    styles: css`
      gap: 1rem;
      @media screen and (max-width: 860px) {
        flex-direction: column;
      }
    `,
    designInfoProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 860px) {
          align-items: center;
          text-align: center;
        }
      `,
      smallHeadingProps: {
        text: "What we do",
      },
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "We make strategic design and technology solutions",
      },
      descriptionProps: {
        styles: css``,
        text: "proper business solutions for your business strategy and corporation.",
      },
      actionLinkProps: {
        styles: css``,
        title: "Let's Get Started",
        path: "/hire-us",
        icon: <FontAwesomeIcon icon={faCircleRight} />,
      },
    },
    imageDemonstratorProps: {
      imagesProps: [
        {
          src: frontEndDev,
          alt: "Frontend Developer",
          id: 0,
          className: "image-1",
          isCircle: false,
          imageCaptionProps: {
            styles: css`
              position: absolute;
              width: 100%;
              bottom: 0;
              .caption-text {
                width: 70%;
                background-color: #fff;
                padding: 0.6rem;
                border-radius: 0.7rem;
              }
            `,
            headingProps: {
              text: "David Snow",
              styles: css`
                color: #000;
              `,
            },
            descriptionProps: {
              text: "Graphic Designer",
            },
          },
          styles: css`
            grid-column: 1;
            position: relative;
          `,
        },
        {
          src: backEndDev,
          alt: "BackEnd Developer",
          id: 1,
          className: "image-2",
          isCircle: true,
          imageCaptionProps: {
            styles: css`
              position: absolute;
              width: 100%;
              bottom: 0;
              .caption-text {
                width: 70%;
                background-color: #fff;
                padding: 0.6rem;
                border-radius: 0.7rem;
              }
            `,
            headingProps: {
              text: "Sarah Din",
              styles: css`
                color: #000;
              `,
            },
            descriptionProps: {
              text: "Sr. BackEnd Developer",
            },
          },
          styles: css`
            grid-column: 1;
            grid-row: 2;
            position: relative;
          `,
        },
        {
          src: fullStackDev,
          alt: "FullStack Developer",
          id: 2,
          className: "image-3",
          isCircle: false,
          imageCaptionProps: {
            styles: css`
              position: absolute;
              width: 100%;
              bottom: 0;
              .caption-text {
                width: 70%;
                background-color: #fff;
                padding: 0.6rem;
                border-radius: 0.7rem;
              }
            `,
            headingProps: {
              text: "James Doe",
              styles: css`
                color: #000;
              `,
            },
            descriptionProps: {
              text: "Sr. FullStack Developer",
            },
          },
          styles: css`
            /* grid-column: 2; */
            align-self: center;
            grid-row: span 2; /* Spans 2 rows */
            justify-self: center; /* Horizontally center the item within its grid cell */
            place-self: center stretch;
            position: relative;
          `,
        },
      ],
      styles: css`
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 2rem;
        @media screen and (max-width: 860px) {
          /* grid-template-columns: repeat(3, 1fr); */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          figure {
            grid-column: auto;
            grid-row: auto;
            .image {
              border-radius: 40%;
              aspect-ratio: 4/5.5;
            }
          }
        }
      `,
    },
  },
};

export const whatWeDoDesignInfoWrappers: Record<string, DesignInfoWrapperProps> = {
  first: {
    styles: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    `,
    designInfoGroupProps: {
      styles: css`
        text-align: center;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        @media screen and (max-width: 860px) {
          grid-template-columns: repeat(2, 1fr);
        }
      `,
      designInfosProps: [
        {
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          `,
          id: 0,
          img: {
            src: webDesign,
            alt: "Web Design",
          },
          smallHeadingProps: {
            text: "Web Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Website Design",
            styles: css`
              font-size: 1.5rem;
            `,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful websites.",
            styles: css``,
          },
        },
        {
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          `,
          id: 1,
          img: {
            src: appDesign,
            alt: "App Design",
          },
          smallHeadingProps: {
            text: "App Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Mobile App Design",
            styles: css`
              font-size: 1.5rem;
            `,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful apps.",
            styles: css``,
          },
        },
        {
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          `,
          id: 2,
          img: {
            src: uiUxDesign,
            alt: "UI/UX Design",
          },
          smallHeadingProps: {
            text: "UIUX Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "UIUX Design",
            styles: css`
              font-size: 1.5rem;
            `,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful UIUX Designs.",
            styles: css``,
          },
        },
        {
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          `,
          id: 3,
          img: {
            src: brandDesign,
            alt: "Brand Design",
          },
          smallHeadingProps: {
            text: "Brand Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Brand Design",
            styles: css`
              font-size: 1.5rem;
            `,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful brands.",
            styles: css``,
          },
        },
      ],
    },
    designInfoProps: {
      styles: css`
        width: 22rem;
        text-align: center;
        display: flex;
        flex-direction: column;
      `,
      smallHeadingProps: {
        text: "What we do",
      },
      contentHeadingProps: {
        tagName: "h2",
        to: "/",
        children: "Creative studio with art & technolgies",
        styles: css`
          font-size: 2rem;
        `,
      },
    },
  },
  second: {
    styles: css`
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
    `,
    designInfoGroupProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex-basis: 50%;
      `,
      designInfosProps: [
        {
          id: 0,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
            `,
            numberContent: "01",
          },
          contentHeadingProps: {
            styles: css`
              grid-column: 2;
            `,
            tagName: "h3",
            to: "/",
            children: "+26 years experience",
          },
          descriptionProps: {
            styles: css`
              grid-column: 2;
            `,
            text: "We have been in the industry for 26 years and have ",
          },
          styles: css`
            display: grid;
            gap: 0.5rem;
          `,
        },
        {
          id: 1,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
              width: min-content;
            `,
            numberContent: "02",
          },
          contentHeadingProps: {
            styles: css`
              grid-column: 2;
            `,
            tagName: "h3",
            to: "/",
            children: "Creative Team",
          },
          descriptionProps: {
            styles: css`
              grid-column: 2;
            `,
            text: "We are the create team that brings your ideas to life.",
          },
          styles: css`
            display: grid;
            gap: 0.5rem;
          `,
        },
        {
          id: 2,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
            `,
            numberContent: "02",
          },
          contentHeadingProps: {
            styles: css`
              grid-column: 2;
            `,
            tagName: "h3",
            to: "/",
            children: "We are helpful",
          },
          descriptionProps: {
            styles: css`
              grid-column: 2;
            `,
            text: "We love to help clients to achieve their online goals.",
          },
          styles: css`
            display: grid;
            gap: 0.5rem;
          `,
        },
      ],
    },
    designInfoProps: {
      styles: css`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (max-width: 860px) {
          align-items: center;
          text-align: center;
        }
      `,
      img: {
        src: like,
        alt: "Lamp",
      },
      smallHeadingProps: {
        text: "Why choose us?",
      },
      contentHeadingProps: {
        tagName: "h2",
        to: "/",
        children: "Experienced, Creative, and Helpful",
        styles: css`
          width: 17rem;
          font-size: 2rem;
        `,
      },
      descriptionProps: {
        text: "We have been in the industry for 26 years and have succesfully launched over 800 websites and 150 mobile applications.",
        styles: css``,
      },
      actionLinkProps: {
        title: "Know more",
        path: "/hire-us",
        icon: "",
        styles: css``,
      },
    },
  },
};
