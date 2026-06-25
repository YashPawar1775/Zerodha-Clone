import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row" style={{ display: "flex", alignItems: "center" }}>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} className="object-fit-contain img-fluid" alt="rightsectionimg"/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;