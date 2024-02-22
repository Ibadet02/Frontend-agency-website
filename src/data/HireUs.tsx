import { css } from "styled-components";
import { DesignInfoProps } from "../components/props";
import { HireUsFormProps } from "../pages/HireUs/props";

export const hireUsDesignInfoProps: Record<string, DesignInfoProps> = {
  first: {
    styles: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    contentHeadingProps: {
      tagName: "h2",
      children: "Let's get in touch!",
      styles: css`
        font-size: 3rem;
      `,
    },
    descriptionProps: {
      text: "we can help you to build your dream website and app.",
      styles: css``,
    },
    flexBasis: "auto",
  },
};

export const hireUsForm: HireUsFormProps = {
  firstInputFamily: {
    heading: "Select what you need",
    children: [
      {
        type: "checkbox",
        name: "projectType",
        value: "Website",
        children: "Website",
        id: 0,
      },
      // {
      //   type: "checkbox",
      //   name: "projectType",
      //   value: "App",
      //   children: "App",
      //   id: 1,
      // },
      // {
      //   type: "checkbox",
      //   name: "projectType",
      //   value: "Web App",
      //   children: "Web App",
      //   id: 2,
      // },
    ],
  },
  secondInputFamily: {
    heading: "What's your budget?",
    children: [
      {
        type: "radio",
        name: "budget",
        value: "$1k - $2k",
        children: "$1k - $2k",
        id: 0,
      },
      {
        type: "radio",
        name: "budget",
        value: "$2k - $3k",
        children: "$2k - $3k",
        id: 1,
      },
      {
        type: "radio",
        name: "budget",
        value: "$3k+",
        children: "$3k+",
        id: 2,
      },
    ],
  },
  nameInputProps: {
    type: "text",
    name: "name",
    value: "",
    children: "Name",
  },
  emailInputProps: {
    type: "email",
    name: "email",
    value: "",
    children: "Email",
  },
};
