import { render, screen } from "@testing-library/react"
import Card from "../Components/Card"


describe('Card', () => {
    test('shows the figure element', () => {
         render(<Card/>);
         const figure_element = screen.getByClassName('character_card');
         expect(figure_element).toBeInTheDocument();
    }) 
})