import React from 'react'


function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 mt-5 ' id='supportWrapper'>
                <h4 >Support Portal</h4>
                <a href='' style={{ textDecoration: "none" }}>Create Ticket</a>

            </div>
            <div className=' row '>
                <div className='col-6 p-5 mb-5'>
                    <h1 className='fs-3 mb-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input type='text' placeholder='Eg. how do I activate F&O' /> <br /><br />
                    <a href='' className='mx-1.5'>Track account opening</a>
                    <a href=''className='mx-2' >Track segment activation</a>
                    <a href='' className='mx-2'>Intraday margins</a>
                    <a href='' className='mx-2'>Kite user manual</a>
                </div>
                <div className='col-6  mt-5  mb-4'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li>
                            <a href='' style={{ lineHeight: "2.5" }}>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href='' style={{ lineHeight: "2.5" }}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
<h1>Hero</h1>