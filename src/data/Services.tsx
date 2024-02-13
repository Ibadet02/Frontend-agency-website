import { css } from "styled-components";
import frontEndDev from "../assets/images/frontend-dev.jpg";
import backEndDev from "../assets/images/backend-dev.jpg";
import fullStackDev from "../assets/images/full_stack-dev.jpg";
import { DesignInfoWrapperProps } from "../components/props";
import { BannerProps } from "../components/Banner/props";
import webDesign from "../assets/images/web-design.png";
import appDesign from "../assets/images/app-design.png";
import uiUxDesign from "../assets/images/ui-ux-design.png";
import brandDesign from "../assets/images/brand-design.png";

export const servicesBanners: Record<string, BannerProps> = {
  first: {
    styles: css`
      gap: 1rem;
      @media screen and (max-width: 990px) {
        flex-direction: column;
        text-align: center;
      }
    `,
    designInfoProps: {
      styles: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 990px) {
          flex-direction: column;
          align-items: center;
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
        icon: "",
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
        @media screen and (max-width: 990px) {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          figure {
            .image {
              aspect-ratio: 4/5.5;
              border-radius: 40%;
            }
          }
        }
      `,
    },
  },
};

export const servicesDesignInfoWrappers: Record<
  string,
  DesignInfoWrapperProps
> = {
  first: {
    designInfoGroupProps: {
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
    styles: css``,
  },
  second : {
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
            margin-top: 2rem;
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
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            @media screen and (max-width: 820px) {
              margin: 0;
            }
          `,
        },
        {
          id: 3,
          img: {
            src: brandDesign,
            alt: "Brand Design",
          },
          // smallHeadingProps: {
          //   text: "Brand Design",
          // },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Brand Design",
            styles: css``,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful brands.",
            styles: css``,
          },
          styles: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
          `,
        },
      ],
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
    styles: css`
      display: flex;
      align-items: center;
      gap: 2rem;
    `,
  },
};
