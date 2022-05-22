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
            <p></p>
        </div>
    );
};

export default QuestionAnswer;