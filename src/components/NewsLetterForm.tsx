import { css } from "styled-components";
import { StyledNewsLetterForm } from "../styles/components/NewsLetterForm.styled";
// import MainButton from "./MainButton";
import MainButton from "./Buttons/MainButton";
import { MainButtonProps } from "./props";
import { useState } from "react";
import useCreateDoc from "../hooks/useCreateDoc";
import Message from "./Message";
const mainButtonProps: MainButtonProps = {
  text: "Subscribe",
  styles: css`
    height: 100%;
    width: 100%;
  `,
};
const NewsLetterForm = () => {
  const [input, setInput] = useState("");
  // const [isMessageVisible, setIsMessageVisible] = useState(false);
  // const [isMessageUnmounted, setIsMessageUnmounted] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsMessageVisible(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [isMessageVisible]);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsMessageUnmounted(true);
  //   }, 1000); // Adjust this timeout based on your transition duration in CSS

  //   return () => clearTimeout(timeout);
  // }, [isMessageVisible]);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const { createDoc } = useCreateDoc("newsletter");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      setInput("");
      // setIsMessageVisible(true);
      createDoc({
        email: input,
        // time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  return (
    <StyledNewsLetterForm onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="email"
          placeholder="Your email address"
          value={input}
          onChange={handleInput}
        />
        <div className="button-wrapper">
          <MainButton {...mainButtonProps} />
        </div>
      </label>
      {false && (
        <Message text="Email's been sent successfully" isVisible={false} />
      )}
    </StyledNewsLetterForm>
  );
};

export default NewsLetterForm;
