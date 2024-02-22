import { css } from "styled-components";
import backEndDev from "../assets/images/backend-dev.jpg";
import ibadet from "../assets/images/ibadet.jpg";
import {
  DesignInfoGroupProps,
  DesignInfoWrapperProps,
} from "../components/props";
import { BannerProps } from "../components/Banner/props";
import webDesign from "../assets/images/web-design.png";
import appDesign from "../assets/images/app-design.png";
import uiUxDesign from "../assets/images/ui-ux-design.png";
import { designİnfo_imageDemonstrator_flexBasis } from "./utils/generateData";

const firstBannerFlexDirection = "row";
export const servicesBanners: Record<string, BannerProps> = {
  first: {
    styles: css`
      align-items: center;
      gap: 2rem;
      @media screen and (max-width: 1215px) {
        flex-direction: column;
      }
    `,
    designInfoProps: {
      styles: css`
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 1215px) {
          align-items: center;
          text-align: center;
        }
      `,
      smallHeadingProps: {
        text: "Services",
      },
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "We make sure your online presence is on point",
      },
      descriptionProps: {
        styles: css``,
        text: "Look below to see how",
      },
      actionLinkProps: {
        styles: css``,
        title: "Let's Get Started",
        path: "/hire-us",
        icon: "",
      },
      // flexBasis: designİnfo_imageDemonstrator_flexBasis(
      //   firstBannerFlexDirection
      // ),
      // flexBasis: "auto",
    },
    imageDemonstratorProps: {
      styles: css`
        display: flex;
        align-items: center;
        height: 100%;
        /* display: grid; */
        /* grid-template-columns: repeat(
          2,
          1fr
        ); Two columns with equal width */
        /* grid-template-rows: repeat(
          2,
          auto
        ); Two rows with automatic height */
        gap: 1rem;
        @media screen and (max-width: 700px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          figure {
            /* width: 100%; */
            /* padding-inline: 3rem; */
            .image {
              /* border-radius: 40%; */
              /* aspect-ratio: 4/5.5; */
            }
          }
        }
      `,
      imagesProps: [
        {
          src: backEndDev,
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
              text: "Robert",
              styles: css`
                color: #000;
              `,
            },
            descriptionProps: {
              text: "CEO & Founder",
            },
          },
          styles: css`
            /* grid-column: 2;
            grid-row: 1; */
            position: relative;
            align-self: flex-start;
            img {
              width: auto;
              height: 10.5rem;
              object-fit: cover;
            }
          `,
        },
        {
          src: ibadet,
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
              text: "Ibadet Ismayilov",
              styles: css`
                color: #000;
              `,
            },
            descriptionProps: {
              text: "Frontend Developer",
            },
          },
          styles: css`
            /* grid-column: 1;
            grid-row: 2; */
            position: relative;
            align-self: flex-end;
            img {
              width: auto;
              height: 10.5rem;
              object-fit: cover;
            }
          `,
        },
      ],
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        firstBannerFlexDirection
      ),
    },
    flexDirection: firstBannerFlexDirection,
  },
};
export const servicesDesignInfoGroups: Record<string, DesignInfoGroupProps> = {
  first: {
    designInfosProps: [
      {
        styles: css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        `,
        smallHeadingProps: {
          text: "Strategy",
        },
        contentHeadingProps: {
          tagName: "h3",
          children: "Fullstack enterprise media management",
          styles: css`
            font-size: 1.5rem;
          `,
        },
        descriptionProps: {
          text: "Regulatory compliance, data security, and data privacy are the foundation of our platform. We are committed to providing a secure and compliant platform that you can trust.",
          styles: css``,
        },
        id: 0,
      },
      {
        styles: css`
          flex: 1;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        `,
        smallHeadingProps: {
          text: "Design",
        },
        contentHeadingProps: {
          tagName: "h3",
          children: "UX/UI Design & Website & App design",
          styles: css`
            font-size: 1.5rem;
          `,
        },
        descriptionProps: {
          text: "higher spacing and movements through an impactful visual hierarchy. We create a design that is not only visually appealing but also functional and user-friendly.",
          styles: css``,
        },
        id: 1,
      },
      {
        styles: css`
          flex: 1;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        `,
        smallHeadingProps: {
          text: "Marketing",
        },
        contentHeadingProps: {
          tagName: "h3",
          children: "Marketing campaigns & Content creation",
          styles: css`
            font-size: 1.5rem;
          `,
        },
        descriptionProps: {
          text: "Making a short time marketing campaign and content creation for your business.",
          styles: css``,
        },
        id: 2,
      },
      {
        styles: css`
          flex: 1;

          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        `,
        smallHeadingProps: {
          text: "Campaigns",
        },
        contentHeadingProps: {
          tagName: "h3",
          children: "Google analytics & measurement",
          styles: css`
            font-size: 1.5rem;
          `,
        },
        descriptionProps: {
          text: "Spaces of each debt in the digital world can help you with overall simplest authentic.",
          styles: css``,
        },
        id: 3,
      },
    ],
    flexBasis: "auto",
    styles: css`
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      /* flex-wrap: wrap; */
      @media screen and (max-width: 820px) {
        flex-wrap: wrap;
      }
    `,
  },
};
const secondDesignInfoWrapperFlexDirection = "row";
export const servicesDesignInfoWrappers: Record<
  string,
  DesignInfoWrapperProps
> = {
  first: {
    designInfoGroupProps: {
      designInfosProps: [
        {
          id: 0,
          img: {
            src: webDesign,
            alt: "Web Development",
          },
          // smallHeadingProps: {
          //   text: "Web Development",
          // },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Web Development",
            styles: css``,
          },
          descriptionProps: {
            text: "Our team will make website for you!",
            styles: css``,
          },
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            /* margin-top: 2rem; */
            @media screen and (max-width: 820px) {
              margin: 0;
            }
          `,
        },
        {
          id: 1,
          img: {
            src: appDesign,
            alt: "App Design",
          },
          // smallHeadingProps: {
          //   text: "App Design",
          // },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Web maintenance",
            styles: css``,
          },
          descriptionProps: {
            text: "Do not stress! We make sure everything is working!",
            styles: css``,
          },
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
          `,
        },
        {
          id: 2,
          img: {
            src: uiUxDesign,
            alt: "UI/UX Design",
          },
          // smallHeadingProps: {
          //   text: "UIUX Design",
          // },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Constant support",
            styles: css``,
          },
          descriptionProps: {
            text: "In case you want to make changes, we are here for you!",
            styles: css``,
          },
          styles: css`
            /* margin-top: 2rem; */
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            grid-column: span 2;
            @media screen and (max-width: 400px) {
              grid-column: 1;
            }
          `,
        },
      ],
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        secondDesignInfoWrapperFlexDirection
      ),
      styles: css`
        text-align: center;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      `,
    },
    designInfoProps: {
      smallHeadingProps: {
        text: "What we do",
      },
      contentHeadingProps: {
        tagName: "h2",
        to: "/",
        children: "We are the team that will take care of your online presence",
        styles: css`
          font-size: 2rem;
        `,
      },
      flexBasis: designİnfo_imageDemonstrator_flexBasis(
        secondDesignInfoWrapperFlexDirection
      ),
      styles: css`
        flex-basis: 50%;
        text-align: left;
        @media screen and (max-width: 820px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      `,
    },
    flexDirection: secondDesignInfoWrapperFlexDirection,
    styles: css`
      display: flex;
      align-items: center;
      gap: 2rem;
    `,
  },
};
