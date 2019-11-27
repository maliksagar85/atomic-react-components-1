import { css } from 'styled-components';

const styles = css`
  margin: 0;

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default styles;
