import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";
import Contact from "../../Routes/Contact";
import { ContextGlobal, ContextProvider } from '../utils/global.context';


afterEach(() => {
    cleanup();
});

test("should render a form", () =>{
    render(<Form/>);
    const formElement = screen.getByTestId('form-1');
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveTextContent("Full Name");
});

test("Should render a Contact", () =>{
    render(<Contact/>);
    const contactElement = screen.getByTestId('contact-1');
    expect(contactElement).toBeInTheDocument();
    expect(contactElement).toHaveTextContent("Want to know more?")
});


describe("theme", () => {
    it("Sets theme status to LIGTH", () => {
        const TestComponent = () => {
            const {state, dispatch} = useContext(ContextGlobal);

            return(
                <>
                    <button onClick={() => dispatch({theme: state.theme})}>{state.theme}</button>
                </>
            );
        };

        const Provider = () => (
            <ContextProvider>
                <TestComponent/>
            </ContextProvider>
        );

        render(<Provider/>)
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent("LIGTH")
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent("DARK")

        })
})

