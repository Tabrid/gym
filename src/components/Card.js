import React, { useState } from "react";
import './Card.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Riyad from '../images/riyad.jpg';


const Card = () => {
    const [total, setTotal] = useState(0);
    const [Sum, setSum] = useState(0);
    const diffToast = () => {
        toast('Completed');
    }

    return (
        <div>
            <nav className='header-nav '>

                <div className='logo-container'>
                    <i class="fa-solid fa-dumbbell"></i>
                    <h1>Gym_Zone</h1>
                </div>
                <div className='drop-box'>
                    <a className='text-nav' href="/home">Home</a>
                    <a className='text-nav' href="/about">About</a>
                    <a className='text-nav' href="/service">Service</a>
                </div>


            </nav>
            <div className="body align-middle ">
                <div className="card-container">

                    <div className="card-style">
                        <div className="bg-white">
                            <img className="card-body" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj01oP71ie5bXwPIPTqNf1NdfJi424PFRFiWAJdsObA&s" alt="" />
                            <h6>Push-up</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className=" sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                        <div className="bg-white">
                            <img className="card-body" src="https://media1.popsugar-assets.com/files/thumbor/QDSZ2Kjqulyj4rLt5vGhEqCZjMI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2019/08/29/739/n/1922729/98e4dca65d6800da829a04.89191755_/i/How-Do-Hardstyle-Plank.jpg" alt="" />
                            <h6>Plank</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className=" sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                        <div className="bg-white">
                            <img className="card-body" src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <h6>Walking</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className="  sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                        <div className="bg-white">
                            <img className="card-body" src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <h6>Walking</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className="sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                        <div className="bg-white">
                            <img className="card-body" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <h6>Dumble</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className="sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                        <div className="bg-white">
                            <img className="card-body" src="https://media1.popsugar-assets.com/files/thumbor/QDSZ2Kjqulyj4rLt5vGhEqCZjMI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2019/08/29/739/n/1922729/98e4dca65d6800da829a04.89191755_/i/How-Do-Hardstyle-Plank.jpg" alt="" />
                            <h6>Plank</h6>
                            <p>
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do
                                amet sint
                            </p>

                            <p>Practices:120 min</p>
                            <button
                                onClick={() => setTotal(total + 120)}
                                className=" sector bg-primary text-white border border-primary mb-2 w-75"
                            >
                                add to list
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container align-middle">
                    <div className="Dip-cont d-flex justify-content-evenly">
                        <div>
                            <img className="rounded-circle mt-4" src={Riyad} alt="" />

                        </div>
                        <div>
                            <h4 className="mt-3">Riyad Mollik</h4>
                            <p>Dhaka,Bangladesh</p>
                        </div>



                    </div>
                    <div className="intro p-3  m-2">
                        <div>
                            <h5>60kg</h5>
                            <p>weight</p>
                        </div>
                        <div>
                            <h5>5.6 Feet</h5>
                            <p>height</p>
                        </div>
                        <div>
                            <h5>20yrs</h5>
                            <p>age</p>
                        </div>
                    </div>
                    <h5 className="mt-5">Add a Break</h5>
                    <div className="break p-3 m-2">
                        <button
                            onClick={() => setSum(10)}
                            className="border border-white-radius-5 m-1"
                        >
                            10s
                        </button>
                        <button
                            onClick={() => setSum(20)}
                            className="border border-white-radius-5 m-1"
                        >
                            20s
                        </button>
                        <button
                            onClick={() => setSum(30)}
                            className="border border-white-radius-5 m-1"
                        >
                            30s
                        </button>
                        <button
                            onClick={() => setSum(40)}
                            className="border border-white-radius-5 m-1"
                        >
                            40s
                        </button>
                        <button
                            onClick={() => setSum(50)}
                            className="border border-white-radius-5 m-1"
                        >
                            50s
                        </button>
                    </div>
                    <h5 className="mt-5">Practice details</h5>
                    <div className="count p-3  m-2">
                        <p>practice time:{total}min</p>
                    </div>
                    <div className="count w-500 p-3 m-2">Break time:{Sum}sec</div>
                    <button onClick={diffToast} className="mt-5 bg-primary text-white border border-primary w-75 last">
                        Activity completed
                    </button>
                    <ToastContainer />
                </div>
            </div>
            <div className=" align-middle border border-dark p-3 m-3 ">
                <h1>Question and Answer</h1>
                <h3>1.How does React work?</h3>
                <p>
                    While building client-side apps, a team of Facebook developers
                    realized that the DOM is slow (The Document Object Model (DOM) is an
                    application programming interface (API) for HTML and XML documents. It
                    defines the logical structure of documents and the way a document is
                    accessed and manipulated.). So, to make it faster, React implements a
                    virtual DOM that is basically a DOM tree representation in JavaScript.
                    So when it needs to read or write to the DOM, it will use the virtual
                    representation of it. Then the virtual DOM will try to find the most
                    efficient way to update the browser’s DOM. Unlike browser DOM
                    elements, React elements are plain objects and are cheap to create.
                    React DOM takes care of updating the DOM to match the React elements.
                    The reason for this is that JavaScript is very fast and it’s worth
                    keeping a DOM tree in it to speed up its manipulation.
                </p>
                <h3>2.State Vs. Props</h3>
                <p>
                    State: The state is an updatable structure that is used to contain
                    data or information about the component and can change over time. The
                    change in state can happen as a response to user action or system
                    event. It is the heart of the react component which determines the
                    behavior of the component and how it will render. A state must be kept
                    as simple as possible. It represents the component's local state or
                    information. It can only be accessed or modified inside the component
                    or by the component directly.
                </p>
                <p>
                    Props: Props are read-only components. It is an object which stores
                    the value of attributes of a tag and work similar to the HTML
                    attributes. It allows passing data from one component to other
                    components. It is similar to function arguments and can be passed to
                    the component the same way as arguments passed in a function. Props
                    are immutable so we cannot modify the props from inside the component.
                </p>
                <h3>3.A Simple Explanation of React.useEffect()</h3>
                <p>
                    useEffect(callback, dependencies) is the hook that manages the
                    side-effects in functional components. callback argument is a function
                    to put the side-effect logic. dependencies is a list of dependencies
                    of your side-effect: being props or state values.
                </p>
                <p>
                    Side-effect cleanup: After initial rendering, useEffect() invokes the
                    callback having the side-effect. cleanup function is not invoked. On
                    later renderings, before invoking the next side-effect callback,
                    useEffect() invokes the cleanup function from the previous side-effect
                    execution (to clean up everything after the previous side-effect),
                    then runs the current side-effect. Finally, after unmounting the
                    component, useEffect() invokes the cleanup function from the latest
                    side-effect.
                </p>
                <p>
                    useEffect() is for side-effects: A functional React component uses
                    props and/or state to calculate the output. If the functional
                    component makes calculations that don't target the output value, then
                    these calculations are named side-effects.
                </p>
                <p>
                    Fetching data: useEffect() starts a fetch request by calling
                    fetchEmployees() async function after the initial mounting. When the
                    request completes, setEmployees(fetchedEmployees) updates the
                    employees state with the just fetched employees list.
                </p>
            </div>

        </div>
    );
};

export default Card;
