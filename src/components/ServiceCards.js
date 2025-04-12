import "./ServiceCards.css";


const services = [
  { title: "Web Development", desc: "Modern websites." },
  { title: "SEO Optimization", desc: "Rank higher on Google." },
  { title: "Marketing", desc: "Increase online reach." },
];

const ServiceCards = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="card">
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
