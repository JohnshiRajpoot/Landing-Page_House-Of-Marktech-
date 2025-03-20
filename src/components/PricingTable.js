import React from "react";
import "./PricingTable.css";


const plans = [
  { name: "Basic", price: "$9.99" },
  { name: "Pro", price: "$19.99" },
  { name: "Enterprise", price: "$49.99" },
];

const PricingTable = () => {
  return (
    <div className="pricing">
      {plans.map((plan, index) => (
        <div key={index} className="plan">
          <h3>{plan.name}</h3>
          <p>{plan.price}/month</p>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
