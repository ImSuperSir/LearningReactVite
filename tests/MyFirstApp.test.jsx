import { render } from "@testing-library/react"
import { MyFirstApp } from "../src/MyFirstApp"

describe('Test on <MyFirstApp />', () => {
  
  test('should match with the snapshot', () => {
    
    const lTitle = 'Frida Sophia Ramirez';
    render(<MyFirstApp title={lTitle} />);
  });

});
