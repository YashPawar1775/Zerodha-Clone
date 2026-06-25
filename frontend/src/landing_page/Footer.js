import React from "react";

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className="container mt-5 border-top">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="Zerodha Logo" style={{ width: "50%" }} />
                        <p>
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className="col">
                        <p className="mb-0">Company</p>
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            About
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Products
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Pricing
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Referral programme
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Careers
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Zerodha.tech
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Press & media
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Zerodha cares (CSR)
                        </span>
                        <br />
                    </div>
                    <div className="col">
                        <p className="mb-0">Support</p>
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Contact
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Support portal
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Z-Connect blog
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            List of charges
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Downloads & resources
                        </span>
                        <br />
                    </div>
                    <div className="col">
                        <p className="mb-0">Account</p>
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Open an account
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            Fund transfer
                        </span>
                        <br />
                        <span className="mt-5 text-muted" style={{cursor: "pointer",}}>
                            60 day challenge
                        </span>
                        <br />
                    </div>
                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "14px", textAlign: "justify" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,#153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                      Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                      Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                      "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;