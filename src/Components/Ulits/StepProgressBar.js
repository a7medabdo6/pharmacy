import React from 'react'
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
const StepProgress = () => {
    const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;


function step2Validator() {
    // return a boolean
  }
   
  function step3Validator() {
    // return a boolean
  }
   
  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }
  return (
    <div className='w-100'>
        <StepProgressBar
  startingStep={0}
  primaryBtnClass='hjhjh'
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Received',
      name: 'step 1',
    },
    {
      label: 'Prepared',
      name: 'step 2',
    },
    {
      label: 'On its way',
      name: 'step 3',
    },
    {
        label: 'Delivered',
        name: 'step 4',
      }
  ]}
/>;
    </div>
  )
}

export default StepProgress