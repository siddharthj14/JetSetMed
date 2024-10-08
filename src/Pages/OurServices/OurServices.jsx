import React from "react";
import "./OurServices.css";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import serviceData1,{serviceData2,serviceData3} from "../../Data/service-data";

const OurServices = () => {
  return (
    <DashboardLayout>
    <div className="osup">
          <h1 className="head">Services for All</h1>
          <div className="upcards">
            {serviceData1.map((obj,index) => (<ServiceCard key={index} icon={obj.image} heading={obj.heading} text={obj.text}/>))}
          </div>
        </div>
        <div className="osdown">
          <h1 className="head">For JetSetMed Members Only</h1>
          <div className="dc1">
          {serviceData2.map((obj,index) => (<ServiceCard key={index} icon={obj.image} heading={obj.heading} text={obj.text}/>))}
          </div>
          <div className="dc2">
          {serviceData3.map((obj,index) => (<ServiceCard key={index} icon={obj.image} heading={obj.heading} text={obj.text}/>))}
          </div>
        </div>
    </DashboardLayout>
  );
};

export default OurServices;
