import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='answer'>
            <h3>Difference between props vs state? </h3>
            <p>* Props are immutable but state are mutable.</p>
            <p>* Props are read-only(not changeable) but state changes asynchronously.</p>
            <p>* Props allows to communicate another component. State can be used tto change rendering the component.</p>
            <p>* Props are reusable but state are not.</p>
            <p>* Props can change in child component but state are not.</p>

            <h3>How useState works?</h3>
            <p>useState() is a built-in react hook. It's enables the use of state of functional component.</p>
            <p>When pass the initial state to this function , it returns a variable with the current state value and another function to update this value.</p>
            <p>useState should only be used within functioning components.</p>
            <p>If you want to change state using the previous value, you'll need to pass a function that takes the previous value and returns an updated value, such as setMessage(previousVal =&gt; previousVal + currentVal).</p>
            <p>Using the useState hook inside a function component, we may construct a piece of state without having to switch to class components.</p>
        </div>
    );
};

export default QuestionAnswer;