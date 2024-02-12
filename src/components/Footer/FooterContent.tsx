
import { StyledFooterContent } from "../../styles/components/Footer/FooterContent.styled";
import ContentHeading from "../ContentHeading";
import MainDescription from "../MainDescription";
import ChangeMode from "./ChangeMode";
import newsLetter from "../../assets/images/newsletter.png";
import {
  ContentHeadingProps,
  DesignInfoProps,
  MainDescriptionProps,
} from "../props";
import { footerLinks } from "../../data/components/FooterLinks";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";
import DesignInfo from "../DesignInfo";
// import MainButton from "../MainButton";
import MainButton from "../Buttons/MainButton";
import { MainButtonProps } from "../Buttons/props";
import Logo from "../Logo";
const designInfoProps: DesignInfoProps = {
  styles: css`
    text-align: center;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,
  img: {
    src: newsLetter,
    alt: "News Letter",
  },
  smallHeadingProps: {
    text: "Subscribe",
  },
  contentHeadingProps: {
    styles: css`
      font-size: 2rem;
    `,
    tagName: "h2",
    children: "Subscribe to get the latest news about us",
  },
  descriptionProps: {
    styles: css``,
    text: "We recommend you to subscribe to our newspaper, daily updates and breaking news.",
  },
  doesInputExist: true,
};
const descriptionPropsTopLeft: MainDescriptionProps = {
  text: "Hexlab is a digital agency that specializes in building websites and web applications.",
  styles: css``,
};
const contentHeadingPropsTopRight: ContentHeadingProps = {
  tagName: "h3",
  children: "Get in touch",
  styles: css`
    font-size: 1.9rem;
  `,
};
const mainButtonProps: MainButtonProps = {
  text: "Send",
  textFadesOut: '30rem',
  styles: css`
    padding-block: 0.5rem;
    justify-content: center;
  `,
  
};
const descriptionPropsTopRight: MainDescriptionProps = {
  text: "Questions? Comments? We'd love to hear from you.",
  styles: css``,
};
const FooterContent = () => {
  return (
    <StyledFooterContent className="footer-content">
      <DesignInfo {...designInfoProps} />
      <div className="footer-content__top">
        <div className="footer-content__top--left">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <MainDescription {...descriptionPropsTopLeft} />
          <ChangeMode />
        </div>
        <div className="footer-content__top--middle">
          {footerLinks.map(({ id, contentHeadingProps, links }) => {
            return (
              <div
                key={id}
                className="footer-content__top--middle--link-container"
              >
                <ContentHeading
                  {...(contentHeadingProps as ContentHeadingProps)}
                />
                <div
                  className={`footer-content__top--middle--link-container--link-grid ${
                    contentHeadingProps.children === "About"
                      ? "about"
                      : "use-case"
                  }`}
                >
                  {links.map(({ id, title, href }) => {
                    return (
                      <a key={id} href={href}>
                        <span>{title}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-content__top--right">
          <ContentHeading {...contentHeadingPropsTopRight} />
          <MainDescription {...descriptionPropsTopRight} />
          <label htmlFor="">
            <input type="text" placeholder="Enter your email" />
            <MainButton {...mainButtonProps}/>
          </label>
        </div>
      </div>
      <div className="footer-content__bottom">
        <MainDescription text="&copy 2023. Website created by Ibadet Ismayilov" />
        <div>
          <MainDescription text="Work Inquiries" />
          <MainDescription text="ibadetismayilov20@gmail.com" />
        </div>
      </div>
    </StyledFooterContent>
  );
};

export default FooterContent;
