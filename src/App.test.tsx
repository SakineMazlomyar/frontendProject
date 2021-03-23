import React from 'react';
import { render } from '@testing-library/react';
import App from './App';




describe('shoud exist in the document', () => {

    test('renders learn react link', () => {
        const { getByTestId } = render( <App /> )
        expect( getByTestId('app') ).toBeInTheDocument()
    
    })
})
