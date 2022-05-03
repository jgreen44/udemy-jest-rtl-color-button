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

test('initial conditions', () => {
    render(<App/>);

    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: /change to blue/i});
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

})

test('checkbox functionality', () => {
    render(<App />)

    // get button
    const colorButton = screen.getByRole('button', {name: /change to blue/i})

    // checkbox checked,
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
    fireEvent.click(checkbox)

    // expect checkbox to be now checked
    expect(checkbox).toBeChecked()

    // expect button to be disabled
    expect(colorButton).toBeDisabled()

    // checkbox unchecked
    fireEvent.click(checkbox);

    // expect checkbox to be unchecked
    expect(checkbox).not.toBeChecked()

    // expect button to be enabled
    expect(colorButton).toBeEnabled()
})

test('button is gray when disabled', () => {
    render(<App />);

    // flow:
    // get button and checkbox
    const colorButton = screen.getByRole('button', {name: /change to blue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})

    // disable button by clicking checkbox
    fireEvent.click(checkbox);

    // button is gray
    expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

    // enabled button by clicking on checkbox again
    fireEvent.click(checkbox);

    // button is red
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})

})
