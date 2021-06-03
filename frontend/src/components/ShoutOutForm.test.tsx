import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ShoutOutForm from './ShoutOutForm';
expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
	it('should not have any accessibility issues', async () => {
        
		const { container } = render(<ShoutOutForm onSubmit={()=>{}} />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});
