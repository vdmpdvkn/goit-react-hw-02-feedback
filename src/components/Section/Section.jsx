import StyledSection from './Section.styled';
const Section = ({ message, children }) => (
  <StyledSection>
    <h2>{message}</h2>
    {children}
  </StyledSection>
);
export default Section;
