
import React from 'react';
import { render } from '@testing-library/react';
import POJO from './POJO';

test('test our POJO', () => {
    // console.log("in first test");

    const ans = POJO.doSomething('my value');
    expect(ans).toBe('my value');
    expect(POJO.getLastStuff()).toBe('my value');

    const aaasdf = POJO.doSomething;
    aaasdf('different');
    expect(POJO.getLastStuff()).toBe('different');

    //   const { getByText } = render(<App />);
    //   const linkElement = getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
});
