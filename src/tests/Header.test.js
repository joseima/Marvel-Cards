import { render, screen } from "@testing-library/react"
import Header from "../Components/Header";


describe('Heder', () => {
    test('Has the marvel logo', () => {
         render(<Header/>);
         const figure_element = screen.getByClassName('marvel_logo');
         expect(figure_element).toBeInTheDocument();
    }) 
})