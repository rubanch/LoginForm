import { render, screen } from '@testing-library/react';
import App from './App';
import Register from './components/signup.component';

describe ("first container",()=>{
  test('f-1', () => { 
    render (<Register/>)
    var text1 = screen.getByText("Sign Up");
    expect(text1).toBeInTheDocument();
   })
}
)