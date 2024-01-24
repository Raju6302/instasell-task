import "./secondsection.css"
import {Chart, ArcElement, Tooltip, Legend,} from 'chart.js';
import order from './orders.svg';
import eye from './eye.svg'
import { Doughnut } from "react-chartjs-2";
import customize from './customizetime.svg'

Chart.register(
    ArcElement,
    Tooltip,
    Legend
);




const SecondSection:React.FC<{}> = () => {

const data = {
    labels: [ 'Intransit','Exception','Pending','Delivered','Out for delivery'],
    datasets: [{
        label: 'Poll',
        data: [3,4,3,3,2],
        backgroundColor: [ '#956F00','#5E4200','#E5A500','#FFC879', '#FFDDB6']
    }],   
};

const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };


    return (
        <div className="second-section-header">
           <div className="seconde-section-message">
           Instant Dive into Your Performance Metrics
           </div>
           <div className="paragraph-header">
            <p className="time">Lifetime</p>
            <p className="time">Last Week</p>
            <p className="time">Last Month</p>
            <p className="time">Last Year</p>
            <p className="time">Customize Time Line </p>
           </div>
           <div className="box-header">
            <div className="box-1">
                <div className=" section-2-box-1-container">
                <div>
                    <div className="section-2-box1-msg-container">
                        <div>Shipment Updates</div>
                        <div>Total Orders : 394</div>
                    </div>
                    <div className="section-2-box1-delivered-container">
                        <p className="section-2-paragraph">Deleivered</p>
                        <p className="section-2-paragraph">Out for delivery</p>
                        <p className="section-2-paragraph">Intransit</p>
                        <p className="section-2-paragraph">Pending</p>
                        <p className="section-2-paragraph">Ex</p>
                    </div>
                </div>
                <div className="pie-chart-container">
                    <div className="pie-chart">
                           <Doughnut data={data} options={options} />
                    </div>
                </div>
                </div>
            </div>
            <div className="box-2">
                <div className="box-2-first-message-container"> 
                    <div className="box-2-first-message">Star Facts about your orders!!!</div>
                </div>
                <div className="box-2-second-message-container">
                    <div className="box-2-second-message">
                        <p>
                        There are 8 shipments that have been in out for delivery for more than 3 days.
                        </p>
                        <p>
                        There are 5 shipments in exception right now
                        </p>
                        <p>
                        The maximum chargebacks are from Miami.
                        </p>
                    </div>
                    <button className="box-2-button">Check Orders Page</button>
                </div>        
            </div>
            <div className="box-3">
                <div className="section-3-card-3-msg-header">
                    <p className="tracking-msg">Tracking Page Views Vs Orders</p>
                    <p className="understand-user-msg">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                </div>
                <div className="order-tracking-header">
                    <div className="box-3-order-box1">
                        <p className="order-msg">Orders</p>
                        <div className="number-80-header">
                        <p className="number-80">80</p>
                        <img src={order}alt="orders-svg" className="order-icon"/>
                        </div>
                    </div>
                    <div className="box-3-order-box2">
                        <p className="tracking-msg">Tracking Page Views</p>
                        <div className="number-44-header"> 
                        <p className="number-44">44</p>
                        <img src={eye} alt="eye-icon" className="eye-icon" />
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}


export default SecondSection;