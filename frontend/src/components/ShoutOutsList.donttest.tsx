import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ShoutOutsList from './ShoutOutsList';
expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
	it('should not have any accessibility issues', async () => {
		const { container } = render(<ShoutOutsList />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});