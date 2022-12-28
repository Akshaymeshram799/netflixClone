import React from 'react'
import '../assets/styles/QueSec.css'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'

let bgColor = {
    backgroundColor: "#303030"
}

export default function QueSec() {
    return (
        <>
           <Helmet>
            <title>
                Netflix India - Watch Tv Show Online
            </title>
           </Helmet>
            <div className='QueCon'>
                <div className='headingCon'>
                    <h2 className='heading'>Frequently Asked Questions</h2>
                </div>
                <div className='container mx-auto w-50 border-0'>
                    <div className="accordion acccont border border-dark" id="accordionExample" style={bgColor}>
                        <div className="accordion-item  border border-0" style={bgColor}>
                            <h2 className="accordion-header" id="headingOne" style={{ backgroundColor: '#303030' }}>
                                <button className="accordion-button accbtn text-light border border-0" style={{ backgroundColor: "#303030" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Netflix?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show border border-0 accbody" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body border border-0">
                                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                    <p className='mt-4'>
                                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr color='#000000' style={{ height: "10px", border: "0" }} />
                        <div className="accordion-item accBody border border-0" style={bgColor}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed accbtn text-light border border-0" style={bgColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How much does Netflix cost?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse text-light accbody" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                                </div>
                            </div>
                        </div>
                        <hr color='#000000' style={{ height: "10px", border: "0" }} />
                        <div className="accordion-item mb-2 border border-0 " style={{ bgColor }}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed accbtn text-light" style={bgColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Where can I watch?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse accbody" style={bgColor} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body " style={bgColor}>
                                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                    <p className='mt-4'>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                </div>
                            </div>
                        </div>
                        <hr color='#000000' style={{ height: "10px", border: "0" }} />

                        <div className="accordion-item border border-0">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed accbtn text-light border border-0" style={bgColor} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    How do I cancel?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse accbody border border-0" style={bgColor} aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                </div>
                            </div>
                        </div>
                        <hr color='#000000' style={{ height: "10px", border: "0" }} />

                        <div className="accordion-item border border-0">
                            <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed accbtn text-light border border-0" style={bgColor} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    What can I watch on Netflix?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse accbody border border-0" style={bgColor} aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                </div>
                            </div>
                        </div>

                        <hr color='#000000' style={{ height: "10px", border: "0" }} />

                        <div className="accordion-item border border-0 ">
                            <h2 className="accordion-header" id="flush-headingSix">
                                <button className="accordion-button collapsed accbtn text-light border border-0" style={bgColor} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Is Neflix good for kids?
                                </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse accbody border border-0" style={bgColor} aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                    <p className='mt-4'>
                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>

                     <div className='btnSignUp mt-3' >
                          <Link to={'/register'}><button className='px-4 py-3 my-2 rounded-2 mt-5 text-center' style={{backgroundColor:"#DF0712",fontSize:"1.8rem"}}>Finish Sign Up  <span>&#10095;</span></button></Link>
                     </div>
                </div>
            </div>
        </>
    )
}
