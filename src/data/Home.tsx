import { css } from "styled-components";
import frontEndDev from "../assets/images/frontend-dev.jpg";
import backEndDev from "../assets/images/backend-dev.jpg";
import fullStackDev from "../assets/images/full_stack-dev.jpg";
import ourTeam from "../assets/images/our-team.png";
import webDesign from "../assets/images/web-design.png";
import appDesign from "../assets/images/app-design.png";
import uiUxDesign from "../assets/images/ui-ux-design.png";
import brandDesign from "../assets/images/brand-design.png";
import lamp from "../assets/images/lamp.png";
import { PortfolioProps } from "../pages/Home/props";
import typoDesign from "../assets/images/typo-design.png";
import testPortal from "../assets/images/test-portal.png";
import csu from "../assets/images/csu.png";
import okanagan from "../assets/images/okanagan.png";
import ouecco from "../assets/images/oueco.png";
import finds from "../assets/images/finds.png";
import portfolioImg from "../assets/images/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { BannerProps } from "../components/Banner/props";
import { DesignInfoWrapperProps } from "../components/props";
const infoImageSize = "100%";
export const homeBanners: Record<string, BannerProps> = {
  first: {
    styles: css`
      margin-top: 2rem;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      text-align: center;
    `,
    designInfoProps: {
      styles: css`
        width: 25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      `,
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "We are digital products creators",
      },
      descriptionProps: {
        styles: css``,
        text: "Proper business solutions for your business project",
      },
      actionLinkProps: {
        styles: css`
          width: fit-content;
          padding-block: 0.7rem;
          border-radius: 1.5rem;
        `,
        title: "Let's Get Started",
        path: "/hire-us",
        icon: <FontAwesomeIcon icon={faCircleRight} />,
      },
    },
    imageDemonstratorProps: {
      imagesProps: [
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
      styles: css`
        display: flex;
        justify-content: center;
        gap: 1rem;
        height: 100%;
        @media screen and (max-width: 820px) {
          display: none;
        }
      `,
    },
  },
  second: {
    styles: css`
      flex-direction: row-reverse;
      align-items: center;
      gap: 2rem;
      @media screen and (max-width: 820px) {
        flex-direction: column-reverse;
      }
    `,
    designInfoProps: {
      styles: css`
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (max-width: 820px) {
          align-items: center;
          text-align: center;
        }
      `,
      img: {
        src: ourTeam,
        alt: "Our Team",
      },
      smallHeadingProps: {
        text: "small heading",
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
        styles: css`
          width: fit-content;
          color: #3c71ff;
          background-color: #fff;
          &:hover {
            background-color: #3c71ff;
            color: #fff;
          }
        `,
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
          styles: css`
            grid-column: 2; /* Starts at column 2 */
            grid-row: 1; /* Starts at row 1 */
          `,
        },
        {
          src: backEndDev,
          alt: "BackEnd Developer",
          id: 1,
          className: "image-2",
          isCircle: true,
          styles: css`
            grid-column: 2; /* Starts at column 2 */
            grid-row: 2; /* Starts at row 2 */
          `,
        },
        {
          src: fullStackDev,
          alt: "FullStack Developer",
          id: 2,
          className: "image-3",
          isCircle: false,
          styles: css`
            grid-column: 1; /* Starts at column 1 */
            grid-row: span 2; /* Spans 2 rows */
            justify-self: right; /* Horizontally center the item within its grid cell */
            place-self: center stretch;
          `,
        },
      ],
      styles: css`
        flex: 1;
        display: grid;
        grid-template-columns: repeat(
          2,
          1fr
        ); /* Two columns with equal width */
        grid-template-rows: repeat(
          2,
          auto
        ); /* Two rows with automatic height */
        gap: 1rem;
        @media screen and (max-width: 540px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          figure {
            width: auto;
            padding-inline: 3rem;
            .image {
              border-radius: 40%;
              aspect-ratio: 4/5.5;
            }
          }
        }
      `,
    },
  },
  third: {
    styles: css`
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    `,
    designInfoProps: {
      styles: css`
        width: 25rem;
      `,
      img: {
        src: ourTeam,
        alt: "Our Team",
      },
      smallHeadingProps: {
        text: "Our team",
      },
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "Meet with our awesome team",
      },
    },
    imageDemonstratorProps: {
      styles: css`
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        @media screen and (max-width: 820px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-items: center;
        }
        @media screen and (max-width: 540px) {
          grid-template-columns: 1fr;
        }
      `,
      imagesProps: [
        {
          src: frontEndDev,
          alt: "Frontend Developer",
          id: 0,
          className: "image-1",
          imageCaptionProps: {
            styles: css`
              margin-top: 1rem;
            `,
            headingProps: {
              text: "David Snow",
              styles: css``,
            },
            descriptionProps: {
              text: "Sr. UI/UX Designer",
              styles: css``,
            },
          },
          isCircle: false,
          styles: css`
            flex: 1;
          `,
        },
        {
          src: backEndDev,
          alt: "BackEnd Developer",
          id: 1,
          className: "image-2",
          imageCaptionProps: {
            styles: css`
              margin-top: 1rem;
            `,
            headingProps: {
              text: "James Din",
              styles: css``,
            },
            descriptionProps: {
              text: "Sr. Frontend Developer",
              styles: css``,
            },
          },
          isCircle: false,
          styles: css`
            flex: 1;
          `,
        },
        {
          src: fullStackDev,
          alt: "FullStack Developer",
          id: 2,
          className: "image-3",
          imageCaptionProps: {
            styles: css`
              margin-top: 1rem;
            `,
            headingProps: {
              text: "Sarah Jones",
              styles: css``,
            },
            descriptionProps: {
              text: "Sr. Product Designer",
              styles: css``,
            },
          },
          isCircle: false,
          styles: css`
            flex: 1;
          `,
        },
        {
          src: backEndDev,
          alt: "BackEnd Developer",
          id: 3,
          className: "image-2",
          imageCaptionProps: {
            styles: css`
              margin-top: 1rem;
            `,
            headingProps: {
              text: "John Din",
              styles: css``,
            },
            descriptionProps: {
              text: "CEO",
              styles: css``,
            },
          },
          isCircle: false,
          styles: css`
            flex: 1;
          `,
        },
      ],
    },
  },
};
export const homeDesignInfoWrappers: Record<string, DesignInfoWrapperProps> = {
  first: {
    designInfoGroupProps: {
      designInfosProps: [
        {
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
            styles: css``,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful websites.",
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
          smallHeadingProps: {
            text: "App Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Mobile App Design",
            styles: css``,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful apps.",
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
          smallHeadingProps: {
            text: "UIUX Design",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "UIUX Design",
            styles: css``,
          },
          descriptionProps: {
            text: "Our Creative team made great and beautiful UIUX Designs.",
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
          smallHeadingProps: {
            text: "Brand Design",
          },
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
        children:
          "We are a team of creatives who are exited about unique ideas",
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
  second: {
    styles: css`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    `,
    designInfoProps: {
      styles: css`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 30rem;
        @media screen and (max-width: 820px) {
          width: 100%;
        }
      `,
      img: {
        src: lamp,
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
          font-size: 2rem;
        `,
      },
      descriptionProps: {
        text: "We have been in the industry for 26 years and have succesfully launched over 800 websites and 150 mobile applications.",
        styles: css``,
      },
      actionLinkProps: {
        styles: css`
          color: #3c71ff;
          background-color: #fff;
          &:hover {
            background-color: #3c71ff;
            color: #fff;
          }
        `,
        title: "Know more",
        path: "/hire-us",
        icon: <FontAwesomeIcon icon={faCircleRight} />,
      },
    },
    designInfoGroupProps: {
      styles: css`
        display: flex;
        justify-content: space-between;
        text-align: center;
        gap: 1rem;
      `,
      designInfosProps: [
        {
          styles: css`
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            flex: 1;
          `,
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
        },
        {
          styles: css`
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            flex: 1;
          `,
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
        },
        {
          styles: css`
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            flex: 1;
          `,
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
        },
      ],
    },
  },
};
export const portfolio: PortfolioProps = {
  styles: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,
  designInfoProps: {
    styles: css`
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    `,
    img: { src: portfolioImg, alt: "Portfolio" },
    smallHeadingProps: {
      text: "Our portfolio",
    },
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
    actionLinkProps: {
      styles: css``,
      title: "Explore all projects",
      path: "/hire-us",
      icon: "",
    },
  },
  infoImageGroupProps: {
    styles: css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      text-align: left;
      img {
        width: ${infoImageSize};
      }
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
    infoImagesProps: [
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: typoDesign,
          alt: "Typo Design",
        },
        smallHeadingProps: {
          text: "Typography",
        },
        headingProps: {
          text: "Typo Design",
          styles: css``,
        },
        id: 0,
      },
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: testPortal,
          alt: "Testportal",
        },
        smallHeadingProps: {
          text: "Brand",
        },
        headingProps: {
          text: "Testportal",
          styles: css``,
        },
        id: 1,
      },
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: csu,
          alt: "Csu",
        },
        smallHeadingProps: {
          text: "UI/UX Design",
        },
        headingProps: {
          text: "Csu",
          styles: css``,
        },
        id: 2,
      },
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: okanagan,
          alt: "Okanagan",
        },
        smallHeadingProps: {
          text: "UI/UX Design",
        },
        headingProps: {
          text: "Okanagan",
          styles: css``,
        },
        id: 3,
      },
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: ouecco,
          alt: "Ouecco",
        },
        smallHeadingProps: {
          text: "Brand",
        },
        headingProps: {
          text: "Ouecco",
          styles: css``,
        },
        id: 4,
      },
      {
        styles: css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `,
        img: {
          src: finds,
          alt: "Finds",
        },
        smallHeadingProps: {
          text: "Brand",
        },
        headingProps: {
          text: "Finds",
          styles: css``,
        },
        id: 5,
      },
    ],
  },
};
