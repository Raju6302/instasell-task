
import "./firstsection.css"
import tracking from './tracking.svg';
import warning from './warning.svg';

const FirstSection:React.FC<{}> = () => {
    return (
        <div>
           <div className="person-name">
           Welcome, John Mathew!!
           </div>
           <div className="card-header">
            <div className="card-1">
                <div className="paragraph-button-container">
                <div className="card-1-paragraph-conatainer">
                    <div className="first-line ">Order Sync Successful!</div>
                    <p className="second-line">Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                </div>
                <div className="card-1-button-container">
                    <button className="card-1-button">Explore Your Orders</button>
                </div>
                </div>  
            </div>
            <div className="card-2">
            <div className="paragraph-button-container">
                <div className="card-1-paragraph-conatainer">
                    <div className="first-line">
                   <img src={warning} alt="warning-icon" className="warning-icon" />
                        Customize Customer Notification</div>
                    <p className="second-line">Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                </div>
                <div className="card-1-button-container">
                    <button className="card-1-button">Configure Notifications</button>
                </div>
                </div> 
            </div>
            <div className="card-3">
            <div className="paragraph-button-container">
                <div className="card-1-paragraph-conatainer">
                    <div className="first-line">
                    <img src={tracking} alt="tracking-icon" />
                        Your Tracking Link has been generated</div>
                    <p className="second-line">Include the Link to Your Store's Navigation Menu.</p>
                </div>
                <div className="card-1-button-container">
                    <button className="card-3-first-button">Copy Link</button>
                    <button className="card-1-button">Go To Navigation Menu</button>
                </div>
                </div> 
            </div>
           </div>
        </div>
    )
}


export default FirstSection;