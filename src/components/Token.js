
const Token = () => {
    return (
        <section className=" section section-tokensale tc-light mask-c-blend-dark" id="token">
            <div className="container">
                <div className="section-head text-center wide-auto-sm">
                    <h2 className="title title-s4 animated text-yellow-500" data-animate="fadeInUp" data-delay=".1" title="TOKEN">Token Sale</h2>

                </div>
                <div className="nk-block nk-block-token mgb-m30">
                    <div className="row align-items-center justify-content-between gutter-vr-50px">
                        <div className="col-lg-6">
                            <div className="row gutter-vr-30px">
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".3">
                                        <h6 className="title title-s6 title-xs-s2">Contract Address</h6>
                                        <p style={{wordBreak: "break-all"}}>0x2cDA9F1720ec462cbCC2AFeFECF103209Af561Dd</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".4">
                                        <h6 className="title title-s6 title-xs-s2">Total Supply</h6>
                                        <p>900,000,000</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".5">
                                        <h6 className="title title-s6 title-xs-s2">Network</h6>
                                        <p>Binance Smartchain</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".6">
                                        <h6 className="title title-s6 title-xs-s2">Token Symbol</h6>
                                        <p>ROG</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".7">
                                        <h6 className="title title-s6 title-xs-s2">Decimal</h6>
                                        <p>18</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stage-info animated" data-animate="fadeInUp" data-delay=".8">
                                        <h6 className="title title-s6 title-xs-s2">Minimal transaction amount</h6>
                                        <p>0.01 BNB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="token-status token-status-s5 games-bg round no-bd animated" data-animate="fadeInUp" data-delay=".9">
                                <div className="token-box token-box-s3">
                                    <div className="countdown-s3 countdown-s4 countdown" data-date="2022/04/22"></div>
                                </div>
                                <div className="token-action">
                                    <a className="btn btn-md btn-grad btn-grad-alternet btn-round" target="blank" href="https://rog-ico.surge.sh">Join &amp; Buy Token</a>
                                </div>
                                <ul className="icon-list">
                                    <li><em className="fab fa-bitcoin"></em></li>
                                    <li><em className="fas fa-won-sign"></em></li>
                                    <li><em className="fab fa-cc-visa"></em></li>
                                    <li><em className="fab fa-cc-mastercard"></em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Token