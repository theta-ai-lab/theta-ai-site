import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Partners.css";
import { partnersData } from "../data/Partners";


function Partners() {
  const [expandedPartnerId, setExpandedPartnerId] = useState(null);

  const togglePartner = (id) => {
    setExpandedPartnerId(expandedPartnerId === id ? null : id);
  };

  return (
    <div className="partners-page">
      <h1>Our Partners</h1>
      <div className="partners-container">
        <div className="partners-tabs">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partner-tab">
              <div
                className="partner-summary"
                onClick={() => togglePartner(partner.id)}
              >
                <img
                  src={partner.thumbnail}
                  alt={partner.name}
                  className="partner-thumbnail"
                />
                <div className="partner-info">
                  <h2>{partner.name}</h2>
                  <p>{partner.shortDescription}</p>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {expandedPartnerId === partner.id && (
                  <motion.div
                    className="partner-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{partner.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
