import React from 'react';
import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";


test('button has correct initial color', () => {
    render(<App/>);

    // find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole('button', {name: /change to blue/i});

    // expect the background color to be red
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})

    // click button
    fireEvent.click(colorButton);

    // expect to have background color of blue
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

    // expect the button text to be 'Change to red'
    expect(colorButton.textContent).toBe('Change to red')
});
