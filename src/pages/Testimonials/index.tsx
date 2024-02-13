
import { StyledTestimonials } from '../../styles/Testimonials/index.styled'
import Feedbacks from '../../components/Feedbacks'
import { feedbacks as feedbacksProps } from "../../data/components/Feedbacks";
const Testimonials = () => {
  return (
    <StyledTestimonials>
        <Feedbacks {...feedbacksProps} />
    </StyledTestimonials>
  )
}

export default Testimonials;