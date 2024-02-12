import { css } from "styled-components";

export const themeData = {
  siteThemes: {
    dark: "#25292F",
    light: "#f8f9fa",
  },
  colors: {
    mainDark: "#25292F",
    mainLight: "#f8f9fa",
    mainBlue: "#3C71FF",
    white: "#FFFFFF",
    transparent: "transparent",
    mainDarkText: "#1C2127",
    mainLightText: "#FFFFFF",
    mainDarkLink: "rgba(0, 0, 0, .7)",
    mainLightLink: "rgba(255, 255, 255, .6)",
    mainDarkLinkHover: "#FFFFFF",
    mainLightLinkHover: "#000000",
    mainLightDescription: "#BCBDBF",
    mainDarkDescription: "#51585E",
    lightGray: "#B0B4C0",
    darkHeading: "#000000",
    lightHeading: "#FFFFFF",
    creamGray: "#D1D4DB",
    silver: "#AFB0B4",
    universe: "#454C52",
    avocado: "#1C2125",
    moon: "#10161d",
  },
};

export const theme = {
  isDarkMode: true,
  bodyOverflow: "auto",
  contentStyles : css`
    width: 75rem;
    padding-inline: 1rem;
    @media screen and (max-width: 1200px){
      width: 100%;
    } 
  `,
  breakpoints: {
    mobile: "0px",
    tablet: "768px",
    desktop: "1024px",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  space: {
    small: 8,
    medium: 16,
    large: 24,
  },
  sizes: {
    small: 8,
    medium: 16,
    large: 24,
  },
  shadows: {
    small: "0px 5px 10px rgba(0, 0, 0, 0.12)",
    medium: "0px 8px 30px rgba(0, 0, 0, 0.12)",
    large: "0px 30px 60px rgba(0, 0, 0, 0.12)",
  },
  colors: function () {
    const theme = this;
    return {
      mainBlue: themeData.colors.mainBlue,
      white: themeData.colors.white,
      secondary: "green",
      siteTheme: function () {
        return theme.isDarkMode
          ? themeData.siteThemes.dark
          : themeData.siteThemes.light;
      },
      mainBG: function () {
        return theme.isDarkMode
          ? themeData.colors.mainDark
          : themeData.colors.mainLight;
      },
      contentHeading: function () {
        return theme.isDarkMode
          ? themeData.colors.mainLightText
          : themeData.colors.mainDarkText;
      },
      mainLink: function () {
        return theme.isDarkMode
          ? themeData.colors.mainLightLink
          : themeData.colors.mainDarkLink;
      },
      mainLinkHover: function () {
        return theme.isDarkMode
          ? themeData.colors.mainDarkLinkHover
          : themeData.colors.mainLightLinkHover;
      },
      mainDescription: function () {
        return theme.isDarkMode
          ? themeData.colors.mainLightDescription
          : themeData.colors.mainDarkDescription;
      },
      heading: function () {
        return theme.isDarkMode
          ? themeData.colors.lightHeading
          : themeData.colors.darkHeading;
      },
      answer: function () {
        return theme.isDarkMode
          ? themeData.colors.silver
          : themeData.colors.universe;
      },
      priceBG: function () {
        return theme.isDarkMode
          ? themeData.colors.avocado
          : themeData.colors.white;
      },
      menuBarBG: function () {
        return theme.isDarkMode
          ? themeData.colors.white
          : themeData.colors.avocado;
      },
      hireUsFormBG: function () {
        return theme.isDarkMode
          ? themeData.colors.moon
          : themeData.colors.white;
      },
      mainBorder: function () {
        return theme.isDarkMode
          ? themeData.colors.transparent
          : themeData.colors.lightGray;
      },
      creamGray: themeData.colors.creamGray,
    };
  },
  transitions: {
    changeMode: "200ms ease-in-out",
  },
  heights: {
    navbar: "4.5rem",
  },
  
};

export type Theme = typeof theme;
