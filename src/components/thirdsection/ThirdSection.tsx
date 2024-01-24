import "./thirdsection.css";
import image from '../../assets/images/paypal-icon.jpg'
import image1 from '../../assets/images/all-reviews.jpg'
import image2 from '../../assets/images/instagram-feed.jpg'
import image3 from '../../assets/images/google-analyitics.jpg'
import image4 from '../../assets/images/shopify-icon.jpg'



const ThirdSection:React.FC<{}> = () => {
    return (
        <div className="third-section-heaader">
            <div className="section-three-description">
            Discover the Heart of Our Functionality
            </div>
            <div className="cart-header">
                <div className="cart-1">
                    <div>
                        <div>
                            <p className="section-2-cart-1-message-1">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</p>
                            <p className="section-2-cart-1-message-2">Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
                        </div>
                        <div className="cart-1-second-message">
                            <div >
                                <div className="card-1-first-msg">Accent Color</div>
                                <div className="cart1-sub">
                                <div className="first-color first-color-text">FF9898</div>
                                    <div className="color-1"></div>
                                </div>
                            </div>
                            <div >
                                <div className="card-1-first-msg">Accent Color</div>
                                <div className="cart1-sub">
                                <div className="first-color">FF9898</div>
                                    <div className="color-2"></div>
                                </div>
                            </div>
                            <div >
                                <div className="card-1-first-msg">Accent Color</div>
                                <div className="cart1-sub">
                                <div className="first-color">FF9898</div>
                                    <div className="color-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-header">
                        <button className="preview-button">Preview</button>
                        <button className="apply-colors-button">Apply Colors</button>
                    </div>
                </div>
                <div className="cart2-header">
                    <div className="cart-2">
                        <div>
                            <div className="cart-3-message-header">
                                <div className="exclusive-onboarding-msg">Exclusive Onboarding Support for High-Volume Brands</div>
                                <p className="unlock-personailsed-msg">Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                            </div>
                            <div className="schedule-a-call-header">
                                <button className="schedule-a-call-button">Schedule A Call</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-3">
                        <div className="cart-3-subheader">
                            <div className="cart3-box3-first-msg">
                                <div className="explore-msg-cart3">Explore Our Integrated Ecosystem</div>
                                <p className="discover-msg-cart3">Discover a variety of popular integrations tailored for your convenience. </p>
                            </div>
                            <div>
                                <div className="image-icon-container">
                                    <img src={image} alt="paypal-icon"  className="image-icon"/>
                                    <img src={image1} alt="paypal-icon" className="image-icon" />
                                    <img src={image2} alt="paypal-icon" className="image-icon"/>
                                    <img src={image3} alt="paypal-icon" className="image-icon"/>
                                    <img src={image4} alt="paypal-icon" className="image-icon"/>
                                </div>
                            <div><button className="explore-integration-button">Explore Integrations</button></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="cart-4-header">
                    <div className="cart-4">
                        <div className="section3-cart4-msg-header">
                            <div className="seamlessly-msg">Seamlessly Integrate Custom HTML Elements</div>
                            <p className="unleash-msg">Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                        </div>
                        <div className="html-box-header">
                            <div className="html-msg">HTML Link</div>
                            <div className="cart-4-box">Value</div>
                        </div>
                        <div className="preview-apply-container">
                            <button className="box3-preview-button">Preview</button>
                            <button className="box3-apply-changes-button">Apply changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ThirdSection;