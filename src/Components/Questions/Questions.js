import React from 'react';

const Questions = () => {
    return (
        <div>
            <div className="title text-center my-5">
                <h2>Learn to earn knowledge.</h2>
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
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Questions;