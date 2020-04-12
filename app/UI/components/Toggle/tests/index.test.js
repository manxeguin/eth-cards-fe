import React from 'react';
import { render } from 'react-testing-library';
import Toggle from '../index';

describe('<Toggle />', () => {
  it('should not have ToggleOptions if props.values is not defined', () => {
    const { container } = render(<Toggle />);
    const elements = container.querySelectorAll('option');
    expect(elements).toHaveLength(1);
    expect(container.firstChild.value).toEqual('--');
  });
});
