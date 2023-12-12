import { render } from "@testing-library/react"
import { MyFirstApp } from "../src/MyFirstApp"

describe('Test on <MyFirstApp />', () => {
  
  test('should match with the snapshot', () => {
    
    const lTitle = 'Frida Sophia';
    const {container} =  render(<MyFirstApp title={lTitle} />);

    expect(container).toMatchSnapshot();



  });

  test('should show display the title into a h1 label', () => {

    const lTitle = 'Frida Sophia';
    const {container, getByText} = render(<MyFirstApp title={lTitle}/>);

    expect(getByText(lTitle)).toBeTruthy();

    const lH1 = container.querySelector('h1');
    // console.log(lH1.innerHTML);
    expect(lH1.innerHTML).toBe(lTitle);
    expect(lH1.innerHTML).toContain(lTitle);
    
  })
  

});
