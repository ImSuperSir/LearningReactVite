
// screen es lo que se renderea
import { getAllByText, render, screen } from "@testing-library/react"
import { MyFirstApp } from "../src/MyFirstApp"

describe('Test on <MyFirstApp />', () =>
{

  const lTitle = 'Hola Im Super Sir';
  const lSubTitle = "Software engineer";

  test('should match with the snapshot', () =>
  {

    const { container } = render(<MyFirstApp title={lTitle} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the message "Hola Im Super Sir"', () =>
  {
    render(<MyFirstApp title={lTitle} />);
    screen.debug(); //todo el html generado de nuestro componente renderizado

    expect(screen.getByText(lTitle)).toBeTruthy();

  });

  test('should display the title into a h1 tag', () =>
  {

    render(<MyFirstApp title={lTitle} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(lTitle);

  });

  test('should display the subtitle', () =>
  {

    render(
      <MyFirstApp
        title={lTitle}
        subtitle={lSubTitle}
      />);

    expect(screen.getAllByText(lSubTitle).length).toBe(1);


  })



});
