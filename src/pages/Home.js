import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import PricingTable from "../components/PricingTable";
import ContactForm from "../components/ContactForm";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div style={{ padding: "60px 0" }}>
        <ServiceCards />
        <SearchBar />
        <PricingTable />
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
