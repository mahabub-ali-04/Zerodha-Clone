import React from 'react'


function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 >Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volume in india daily by tading and invisting in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Option</li>
                                <li>Commodative and Derivative</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks and IPO'S</li>
                                <li>Direct mutual funds</li>
                                <li>bonds and gov. securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;