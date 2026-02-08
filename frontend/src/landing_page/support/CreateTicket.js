import React from 'react'


function CreateTicket() {
    return (
        <div className='container  '>
            <div className='row  p-5 mt-5  mb-5 '>
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Openning</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Resident individual </a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Minor</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Non Resident Indian (NRI)</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Company, Partnership, HUF and LLP</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Glossary</a><br />
                </div>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-user-circle-o" aria-hidden="true"></i>Your Zerodha Account</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Your Profile </a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Account modification</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Nomination</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Transfer and conversion of securities</a><br />
                </div>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-grav" aria-hidden="true"></i>Kite</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>IPO</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Trading FAQs</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Margin Trading Facility (MTF) and Margins</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Charts and orders</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Alerts and Nudges</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>General</a><br />
                </div>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-inr" aria-hidden="true"></i>Funds</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Add money </a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Withdraw money</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Add bank accounts</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>eMandates</a><br />
                </div>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-circle-o-notch" aria-hidden="true"></i>Console</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Portfolio </a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>
                        Corporate actions</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Funds statement</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Reports</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Profile</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Segments</a><br />
                </div>
                <div className='col-4  p-5 mt-2 mb-2   '>
                    <h4><i class="fa fa-circle-o" aria-hidden="true"></i>Coin</h4>
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Mutual funds</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>National Pension Scheme (NPS)</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Features on Coin
                    </a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>Payments and Orders
                        , Partnership, HUF and LLP</a><br />
                    <a style={{ textDecoration: "none", lineHeight: "2.5" }} href=''>General</a><br />
                </div>
            </div>
        </div>

    );
}

export default CreateTicket;