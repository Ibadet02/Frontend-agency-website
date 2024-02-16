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
        children: "You dream it, we code it",
      },
      descriptionProps: {
        styles: css``,
        text: "Proper website for your online presence",
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
      // img: {
      //   src: ourTeam,
      //   alt: "Our Team",
      // },
      smallHeadingProps: {
        text: "Not some ordinary developers!",
      },
      contentHeadingProps: {
        styles: css`
          font-size: 3rem;
        `,
        tagName: "h1",
        children: "We are your long-term partners",
      },
      descriptionProps: {
        styles: css``,
        text: 'Our mission is to become your long-term partners. We want to build a genuine relationship with our clients. "Alone, we can do so little; together, we can do so much."- Helen Keller',
      },
      actionLinkProps: {
        title: "Let's have a meeting!",
        path: "/hire-us",
      },
    },
    imageDemonstratorProps: {
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
          figure {
            width: 100%;
            padding-inline: 3rem;
            .image {
              border-radius: 40%;
              aspect-ratio: 4/5.5;
            }
          }
        }
      `,
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
        display: flex;
        flex-direction: column;
        align-items: center;
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
      },
    },
    designInfoGroupProps: {
      styles: css`
        display: flex;
        justify-content: space-between;
        text-align: center;
        gap: 1rem;
        flex-wrap: wrap;
        & > div {
          min-width: 13rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          flex: 1;
          @media screen and (max-width: 400px) {
            min-width: 100%;
          }
        }
      `,
      designInfosProps: [
        {
          styles: css``,
          id: 0,
          numberedOrderProps: {
            numberContent: "01",
          },
          contentHeadingProps: {
            tagName: "h3",
            to: "/",
            children: "Passionate Team",
            styles: css``,
          },
          descriptionProps: {
            text: "All the core of our work lies our passion, driving us to push boundaries and elevate your online presence to a new level.",
            styles: css``,
          },
        },
        {
          styles: css``,
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
            text: "Creativity is our compass, guiding us to design digital masterpieces that captivate and inspire your audience.",
            styles: css``,
          },
        },
        {
          styles: css``,
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
            text: "Our mission is to make you succeed. We mean that.",
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
      @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
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
