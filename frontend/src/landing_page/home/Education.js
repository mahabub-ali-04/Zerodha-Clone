import React from 'react'


function Education() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg'style={{width:"70%"}} />
                </div>
                <div className='col'>
                    <h1 className='mb-4 fs-4'>Free and open market education</h1>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''  style={{ textDecoration: "none" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-4 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.<p />
                        <a href=''  style={{ textDecoration: "none" }}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;