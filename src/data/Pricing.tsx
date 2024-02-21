import { css } from "styled-components";
import { PriceGroupProps } from "../pages/Pricing/props";
import { DesignInfoProps } from "../components/props";
export const pricingDesignInfoProps: Record<string, DesignInfoProps> = {
  first: {
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
      text: "Please note that the prices can change every 6 months.",
      styles: css``,
    },
    flexBasis: "auto",
  },
  second: {
    styles: css`
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    smallHeadingProps: {
      text: "Quick answers",
    },
    contentHeadingProps: {
      tagName: "h2",
      children: "Frequently Asked Questions",
      styles: css``,
    },
    flexBasis: "auto",
  },
};
export const priceGroupProps: PriceGroupProps = {
  pricesProps: [
    {
      smallHeadingProps: {
        text: "Basic",
      },
      price: {
        text: "150€",
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
        text: "We take care of everything for you",
        styles: css``,
      },
      taskGroupProps: {
        tasksProps: [
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "Free hosting",
              styles: css``,
            },
            id: 0,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "Free available domain name",
              styles: css``,
            },
            id: 1,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "24/7 support",
              styles: css``,
            },
            id: 2,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "Constant updates for your website",
              styles: css``,
            },
            id: 3,
          },
          {
            icon: "",
            contentHeadingProps: {
              tagName: "h4",
              children: "Maintenance included",
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
  ],
};
