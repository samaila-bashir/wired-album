import {Spinner,ProgressText,Container} from './spinner'
import  PropTypes  from 'prop-types';

export default function SpinnerComponent({loadingText}) {
  return (
    <Container>
      <Spinner />
      <ProgressText>
          {loadingText || "loading..."}
      </ProgressText>
    </Container>
  );
}

SpinnerComponent.propTypes = {
    loadingText: PropTypes.string
}
