import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('We are testing Counter App', () =>
{

  const lInitialValue = 50;

  test('should compare the snapshot', () =>
  {

    const { container } = render(<CounterApp value={lInitialValue} />);
    expect(container).toMatchSnapshot();

  });

  test('should display the initial value', () => {
    
    render(<CounterApp value={lInitialValue}/>);
    expect(screen.getByText(lInitialValue)).toBeTruthy();

    expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(lInitialValue.toString());

  })
  


});
