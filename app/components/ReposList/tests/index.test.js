import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from 'react-testing-library';

import ReposList from '../index';

describe('<ReposList />', () => {
  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <ReposList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <ReposList repos={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
