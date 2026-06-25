import React from "react";

function LeftSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore,}) {
    return (
        <div className="container mt-5">
            <div className="row" style={{ display: "flex", alignItems: "center" }}>
                <div className="col-6">
                    <img src={imageURL} className="object-fit-contain img-fluid" alt="leftsectionimg"/>
                </div>
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={tryDemo} style={{ marginLeft: "20px", textDecoration: "none" }}>
                            Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{ marginLeft: "80px", textDecoration: "none" }}>
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="googleplay" />
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" style={{ marginLeft: "50px" }} alt="appstore"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;