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
import { designİnfo_imageDemonstrator_flexBasis } from "./utils/generateData";
const firstBannerFlexDirection = "row";
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
        children: "We will level up your online presence",
      },
      descriptionProps: {
        styles: css``,
        text: "Your success is our mission",
      },
      actionLinkProps: {
        styles: css``,
        title: "Let's Get Started",
        path: "/hire-us",
        icon: <FontAwesomeIcon icon={faCircleRight} />,
      },
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        firstBannerFlexDirection
      ),
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
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        firstBannerFlexDirection
      ),
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
    flexDirection: firstBannerFlexDirection,
  },
};
const secondDesignInfoWrapperFlexDirection = "row";
export const whatWeDoDesignInfoWrappers: Record<
  string,
  DesignInfoWrapperProps
> = {
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
      flexBasis: 'auto',
    },
    designInfoProps: {
      styles: css`
        width: 22rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      `,
      smallHeadingProps: {
        text: "What we do",
      },
      contentHeadingProps: {
        tagName: "h2",
        to: "/",
        children: "Passioante, Creative, and Helpful",
        styles: css`
          font-size: 2rem;
        `,
      },
    },
    flexDirection: 'row',
  },
  second: {
    styles: css`
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      align-items: center;
    `,
    designInfoGroupProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `,
      designInfosProps: [
        {
          id: 0,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
              justify-self: end;
            `,
            numberContent: "01",
          },
          contentHeadingProps: {
            styles: css`
              grid-column: 2;
            `,
            tagName: "h3",
            to: "/",
            children: "Passionate Team",
          },
          descriptionProps: {
            styles: css`
              grid-column: 2;
              grid-row: 2;
            `,
            text: "All the core of our work lies our passion, driving us to push boundaries and elevate your online presence to a new level.",
          },
          styles: css`
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0.5rem;
          `,
        },
        {
          id: 1,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
              justify-self: end;
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
            text: "Creativity is our compass, guiding us to design digital masterpieces that captivate and inspire your audience.",
          },
          styles: css`
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0.5rem;
          `,
        },
        {
          id: 2,
          numberedOrderProps: {
            styles: css`
              grid-column: 1;
              justify-self: end;
            `,
            numberContent: "03",
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
            text: "Our mission is to make you succeed. We mean that.",
          },
          styles: css`
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0.5rem;
          `,
        },
      ],
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        secondDesignInfoWrapperFlexDirection
      ),
    },
    designInfoProps: {
      styles: css`
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
        children: "Passionate, Creative, and Helpful",
        styles: css`
          font-size: 2rem;
        `,
      },
      descriptionProps: {
        text: "We are a passionate team of young web developers dedicated to creating meaningful online experiences, driven by our love for innovation and genuine commitment to our clients' success.",
        styles: css``,
      },
      actionLinkProps: {
        title: "Know more",
        path: "/hire-us",
        icon: "",
        styles: css``,
      },
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        secondDesignInfoWrapperFlexDirection
      ),
    },
    flexDirection: secondDesignInfoWrapperFlexDirection,
  },
};
