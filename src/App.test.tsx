import React from 'react';
import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";
import {replacePascalCaseWithSpace} from "./App";


test('button has correct initial color', () => {
    render(<App/>);

    // find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole('button', {name: /change to midnightblue/i});

    // expect the background color to be red
    expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

    // click button
    fireEvent.click(colorButton);

    // expect to have background color of blue
    expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})

    // expect the button text to be 'Change to red'
    expect(colorButton.textContent).toBe('Change to MediumVioletRed')
});

test('initial conditions', () => {
    render(<App/>);

    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: /change to midnightblue/i});
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

})

test('checkbox functionality', () => {
    render(<App />)

    // get button
    const colorButton = screen.getByRole('button', {name: /change to midnightblue/i})

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
    const colorButton = screen.getByRole('button', {name: /change to midnightblue/i})
    const checkbox = screen.getByRole('checkbox', {name: /disable button/i})

    // disable button by clicking checkbox
    fireEvent.click(checkbox);

    // button is gray
    expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

    // enabled button by clicking on checkbox again
    fireEvent.click(checkbox);

    // button is red
    expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

})

// describe allows to combine tests (grouping tests)
describe('spaces before pascal case capital letters', () => {
    test('works for no inner capital letters', () => {
        expect(replacePascalCaseWithSpace('Red')).toBe('Red')
    })

    test('works for on inner capital letter', () =>{
        expect(replacePascalCaseWithSpace('MidnightBlue')).toBe('Midnight Blue')
    })

    test('work for multiple inner capital letters', () => {
        expect(replacePascalCaseWithSpace('MediumVioletRed')).toBe('Medium Violet Red')
    })
})
