import { render } from "@testing-library/react"
import { MyFirstApp } from "../src/MyFirstApp"

describe('Test on <MyFirstApp />', () =>
{

  // test('should match with the snapshot', () => {

  //   const lTitle = 'Frida Sophia';
  //   const {container} =  render(<MyFirstApp title={lTitle} />);

  //   expect(container).toMatchSnapshot();



  // });

  test('should show display the title into a h1 label', () =>
  {

    const lTitle = 'Frida Sophia';
    const { container, getByText, getByTestId } = render(<MyFirstApp title={lTitle} />);

    expect(getByText(lTitle)).toBeTruthy();

    //<h1 data-testid="test-title">{title}</h1>  <<-- este es el testid, y se llama test.title
    //funciona parecido al data de html (dataset)
    //expect(getByTestId('test-title')).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(lTitle);

    // const lH1 = container.querySelector('h1');
    // console.log(lH1.innerHTML);
    // expect(lH1.innerHTML).toBe(lTitle);
    // expect(lH1.innerHTML).toContain(lTitle);

  });

  test('should display the props subtitle', () =>
  {

    const lTitle = 'Frida Sophia';
    const lSubTitle = 'Soy un subtitle';
    const { getByText } = render(
      <MyFirstApp
        title={lTitle}
        subtitle={lSubTitle}
      />);

    expect(getByText(lSubTitle)).toBeTruthy();


  })



});
