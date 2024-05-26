import React, { cloneElement } from 'react';
import { useStep } from 'src/state/useStore';
import { Children } from 'react';
const Stepper = ({ children }) => {
  const { step, nextStep, prevStep } = useStep();
  console.log(children);


  const child = Children.map(children, child => cloneElement(child))
  console.log(child)
  const num = 0;

  return (
    <div>
   {/*    {modifiedChildren[num]} */}
   {child[num]}
      {/*    {step === 0 ? <Test /> : <Test2 />} */}
    </div>
  );
};

export default Stepper;

const Test = () => {
  return <div>form 1</div>;
};

const Test2 = () => {
  return <div>form 2</div>;
};
