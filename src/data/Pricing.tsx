import { css } from "styled-components";
import { PriceGroupProps } from "../pages/Pricing/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { DesignInfoWrapperProps } from "../components/props";

export const pricingDesignInfoWrappers: Record<string, DesignInfoWrapperProps> =
  {
    first: {
      designInfoProps: {
        styles: css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,
        contentHeadingProps: {
          tagName: "h2",
          children: "Pricing",
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
      designInfoProps: {
        styles: css`
          text-align: center;
        `,
        smallHeadingProps: {
          text: "Quick answers",
        },
        contentHeadingProps: {
          tagName: "h2",
          children: "Frequently Asked Questions",
          styles: css``,
        },
      },
    },
  };

export const priceGroupProps: PriceGroupProps = {
  pricesProps: [
    {
      smallHeadingProps: {
        text: "Basic",
      },
      price: {
        text: "19$",
        styles: css`
          font-size: 3rem;
          font-weight: 700;
        `,
      },
      duration: {
        text: "/per month",
        styles: css`
          font-size: 1.5rem;
          font-weight: 400;
        `,
      },
      descriptionProps: {
        text: "For most businesses that want to optimize web queries.",
        styles: css``,
      },
      taskGroupProps: {
        tasksProps: [
          {
            icon: (
              <FontAwesomeIcon icon={faCheck} style={{ color: "#3B6DF4" }} />
            ),
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 0,
          },
          {
            icon: (
              <FontAwesomeIcon icon={faCheck} style={{ color: "#3B6DF4" }} />
            ),
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 1,
          },
          {
            icon: (
              <FontAwesomeIcon icon={faCheck} style={{ color: "#3B6DF4" }} />
            ),
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 2,
          },
          {
            icon: (
              <FontAwesomeIcon icon={faCheck} style={{ color: "#3B6DF4" }} />
            ),
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 3,
          },
          {
            icon: (
              <FontAwesomeIcon icon={faCheck} style={{ color: "#3B6DF4" }} />
            ),
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 4,
          },
        ],
      },
      actionLinkProps: {
        title: "Choose Plan",
        icon: "",
        path: "/",
        styles: css`
          width: 100%;
        `,
      },
      id: 0,
    },
    {
      smallHeadingProps: {
        text: "Basic",
      },
      price: {
        text: "19$",
        styles: css`
          font-size: 3rem;
          font-weight: 700;
        `,
      },
      duration: {
        text: "/per month",
        styles: css`
          font-size: 1.5rem;
          font-weight: 400;
        `,
      },
      descriptionProps: {
        text: "For most businesses that want to optimize web queries.",
        styles: css``,
      },
      taskGroupProps: {
        tasksProps: [
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 0,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 1,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 2,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 3,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 4,
          },
        ],
      },
      actionLinkProps: {
        title: "Choose Plan",
        icon: "",
        path: "/",
        styles: css`
          width: 100%;
        `,
      },
      id: 1,
    },
    {
      smallHeadingProps: {
        text: "Basic",
      },
      price: {
        text: "19$",
        styles: css`
          font-size: 3rem;
          font-weight: 700;
        `,
      },
      duration: {
        text: "/per month",
        styles: css`
          font-size: 1.5rem;
          font-weight: 400;
        `,
      },
      descriptionProps: {
        text: "For most businesses that want to optimize web queries.",
        styles: css``,
      },
      taskGroupProps: {
        tasksProps: [
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 0,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 1,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 2,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 3,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "All limited links",
              styles: css``,
            },
            id: 4,
          },
        ],
      },
      actionLinkProps: {
        title: "Choose Plan",
        icon: "",
        path: "/",
        styles: css`
          width: 100%;
        `,
      },
      id: 2,
    },
  ],
};
