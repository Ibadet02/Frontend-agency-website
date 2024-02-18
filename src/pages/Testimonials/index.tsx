import { StyledTestimonials } from "../../styles/Testimonials/index.styled";
// import Feedbacks from '../../components/Feedbacks'
// import { feedbacks as feedbacksProps } from "../../data/components/Feedbacks";
import Construction from "../../components/Construction";
const Testimonials = () => {
  return (
    <StyledTestimonials>
      {/* <Feedbacks {...feedbacksProps} /> */}
      <Construction text="Hoo-ah! Our website took a wrong turn at the digital intersection... Don't worry! We're rerouting it back on track" />
    </StyledTestimonials>
  );
};

export default Testimonials;
