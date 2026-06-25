import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="smallcaselogo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}}/>
                    <p className="text-small text-muted">Thematic Investment Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" alt="straklogo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}} />
                    <p className="text-small text-muted">Algo & Strategy Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="sensibulllogo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}} />
                    <p className="text-small text-muted">Option Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="fundhouselogo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}} />
                    <p className="text-small text-muted">Asset Management Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png" alt="goldenpilogo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}} />
                    <p className="text-small text-muted">Bonds Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" alt="dittologo" className="img-fluid object-fit-contain" style={{maxHeight:"55px", width: "100%"}} />
                    <p className="text-small text-muted">Insurance Platform</p>
                </div>
                <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{ width: "20%", margin: "0 auto" }}>
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;