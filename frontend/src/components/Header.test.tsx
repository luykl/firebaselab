import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from './Header';
expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<Header/>);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});