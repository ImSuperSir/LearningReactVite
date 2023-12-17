import { findByText, fireEvent, getByText, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"
import { Linter } from "eslint";

describe('We are testing Counter App', () =>
{

  const lInitialValue = 50;

  test('should compare the snapshot', () =>
  {

    const { container } = render(<CounterApp value={lInitialValue} />);
    expect(container).toMatchSnapshot();

  });

  test('should display the initial value', () =>
  {

    render(<CounterApp value={lInitialValue} />);
    expect(screen.getByText(lInitialValue)).toBeTruthy();

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(lInitialValue.toString());

  })

  test('should increase with the button +1', () =>
  {

    render(<CounterApp value={lInitialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('51')).toBeTruthy();


  });

  test('should decrease with the button -1', () => {

    render(<CounterApp value={lInitialValue} />);
    fireEvent.click(screen.getByText('-1'));
    screen.debug(); // to see the code just after the click event
    expect(screen.getByText('49')).toBeTruthy();
    
    
  });

  test('should reset the value with the button Reset', () => {
    
    render(<CounterApp value={lInitialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    // fireEvent.click(screen.getByText('Reset'));
    // expect(screen.getByText(lInitialValue) ).toBeTruthy();

    fireEvent.click(screen.getByRole('button',{ name:'btn-reset'}));
    expect(screen.getByText(lInitialValue) ).toBeTruthy();

  })
  
  


});
