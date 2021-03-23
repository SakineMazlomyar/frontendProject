import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {

    test('shoud exist in the document', () => {
        const { getByTestId } = render( <App /> )
        expect( getByTestId('app') ).toBeInTheDocument()
    
    })
})
