import { render } from '@testing-library/react';
import TodoContainer from '.';

it('TodoContainer renderiza sem crash', () => {
  render(<TodoContainer children={undefined} />);
});
