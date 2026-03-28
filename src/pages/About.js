import React from "react";
import "./About.css"; 

function About() {
  return (
    <div className="container my-5">

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 text-center border-0 rounded-4">

            <img
              src="/images/logo_aasha.png"
              alt="Company Logo"
              className="aasha-logo mx-auto mb-3 img-fluid"
              style={{ maxWidth: "450px" }}
            />

            <h3 className="text-success fw-bold mb-3">About Company</h3>

            <p className="text-muted">
              Our platform connects farmers and merchants,
              enabling easy and transparent agricultural trading.
            </p>

          </div>
        </div>
      </div>

      {/* Features */}
      <div className="row mt-5 text-center">

        <h2 className="fw-bold mb-4 text-success">Our Features</h2>

        <div className="col-md-4 mb-4">
          <div className="feature-card card p-4 border-0 h-100 text-center">
            <img
              src="/images/direct_treading.png"
              alt="Direct Trading"
              className="feature-img"
            />
            <h5 className="text-success mt-3">Direct Trading</h5>
            <p className="text-muted">
              Farmers can sell directly to buyers without middlemen.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="feature-card card p-4 border-0 h-100 text-center">
            <img
              src="/images/better_pricing.png"
              alt="Better Pricing"
              className="feature-img"
            />
            <h5 className="text-success mt-3">Better Pricing</h5>
            <p className="text-muted">
              Get fair and transparent pricing for agricultural products.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="feature-card card p-4 border-0 h-100 text-center">
            <img
              src="/images/twenty_fourSeven.png"
              alt="24/7 Access"
              className="feature-img"
            />
            <h5 className="text-success mt-3">24/7 Access</h5>
            <p className="text-muted">
              Access the market anytime and anywhere.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;