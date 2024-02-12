import { css } from "styled-components";

export const footerLinks = [
  {
    id: 0,
    contentHeadingProps: {
      tagName: "h3",
      children: "About",
      styles: css`
        font-size: 1.9rem;
      `,
    },
    links: [
      {
        id: 0,
        title: "About us",
        href: "/",
      },
      {
        id: 1,
        title: "Our team",
        href: "/",
      },
      {
        id: 2,
        title: "News",
        href: "/",
      },
      {
        id: 3,
        title: "What we do",
        href: "/",
      },
      {
        id: 4,
        title: "Services",
        href: "/",
      },
      {
        id: 5,
        title: "Portfolio",
        href: "/",
      },
      {
        id: 6,
        title: "Blog",
        href: "/",
      },
      {
        id: 7,
        title: "Pricing",
        href: "/",
      },
    ],
  },
  {
    id: 1,
    contentHeadingProps: {
      tagName: "h3",
      children: "Social Media",
      styles: css`
        font-size: 1.9rem;
      `,
    },
    links: [
      {
        id: 0,
        title: "YouTube",
        href: "https://www.youtube.com/channel/UCc-5UolRjxVenYNk-xhmR4g",
      },
      {
        id: 1,
        title: "Instagram",
        href: "https://www.instagram.com/devroagency/?hl=en",
      },
      {
        id: 2,
        title: "Facebook",
        href: "https://www.facebook.com/devroagency/",
      },
      {
        id: 3,
        title: "TikTok",
        href: "https://www.tiktok.com/@devroagency",
      },
    ],
  },
];
