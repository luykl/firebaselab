
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ShoutOutPost from './ShoutOutPost';
import ShoutOut from "../model/ShoutOut"
expect.extend(toHaveNoViolations);

describe('MyComponent', () => {
	it('should not have any accessibility issues', async () => {
        const pretendShoutOut:ShoutOut={to:"me", from:"me", message:"hello"}
		const { container } = render(<ShoutOutPost shoutOut={pretendShoutOut} />);
		const results = await axe(container);
		expect(results).toHaveNoViolations(); 
	});
});







