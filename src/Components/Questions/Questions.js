import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className="title text-center my-5">
                <h2 className='question-part-title'>Learn to gain knowledge.</h2>
            </div>

            <div className='m-3'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className=''><span className='fw-bold'>Question 1:</span> How does React work?</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>React is a frontend Javascript framework. It is created by Facebook. It works as a tool for building UI components. It doesn't manipulate browser's DOM directly. Before making the changes in the browser DOM, it creates a virtual DOM in the memory and does all the necessary manipulating. It changes only what needs to be changed.</p>
                            </div>
                        </div>
                    </div >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <p className=''><span className='fw-bold'>Question 2:</span>Write down the differences between the props and state in React.</p>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Differences between the props and state:</strong>

                                <div>
                                    <h5 className='fw-bold mt-4'>Props:</h5>
                                    <ul>
                                        <li>The data is passed from one component to another.</li>
                                        <li>It is immutable</li>
                                        <li>It can be used with state and functional components.</li>
                                        <li>Props are read only.</li>
                                        <li>It allows you to pass data as an argument to other arguments.</li>
                                        <li>Props are used to communicate between components.</li>
                                        <li>Stateless component can have props.</li>
                                        <li>Props make components reusable.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className='fw-bold mt-4'>State:</h5>
                                    <ul>
                                        <li>The data is passed within the component only.</li>
                                        <li>It is mutable.</li>
                                        <li>State can be used only with the state or class component (Before 16.0)</li>
                                        <li>It can be read and write.</li>
                                        <li>State holds information about the components.</li>
                                        <li>It can be used for rendering dynamic changes with the component.</li>
                                        <li>Stateless components can not have state.</li>
                                        <li>State cannot make components reusable.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <p className=''><span className='fw-bold'>Question 3:</span> By using useEffect in React, what can you do except loading data through api?</p>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Use cases of useEffect except fetching data:</strong>
                                <div>
                                    <ul>
                                        <li className='mt-3'>
                                            <p className='fw-bold mb-1'>Running on state change: validating input field</p>
                                            <p>When the input is being stored in a state using useState, the validation takes place every time with the changes of the input. Validating an input is another great application for useEffect. </p>

                                        </li>
                                        <li className='mt-3'>
                                            <p className='fw-bold mb-1'>Running on state change: live filtering</p>
                                            <p>By using useEffect, we can filter an array "on the fly" by typing letters into an input element. We will need to use a state to save the input and a filter implementation inside the useEffect that will be triggered when the input changes.</p>
                                        </li>

                                        <li className='mt-3'>
                                            <p className='fw-bold mb-1'>Running on props change: update paragraph list on fetched API data update</p>
                                            <p>We want to trigger a state update due to an update fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.</p>
                                        </li>

                                        <li className='mt-3'>
                                            <p className='fw-bold mb-1'>Running on state change: trigger animation on new array value</p>
                                            <p>To trigger an animation on a shopping cart as a side effect of adding a new product to it, we can use the useEffect hook.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Questions;