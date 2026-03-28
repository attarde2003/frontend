import React from "react";

function Market() {
  const markets = [
    { name: "Jalgaon", img: "/images/marketimages/jalgaon.png" },
    { name: "Dharangaon", img: "/images/marketimages/dharangaon.png" },
    { name: "Bhusawal", img: "/images/marketimages/bhusawal.png" },
    { name: "Chopda", img: "/images/marketimages/chopda.png" },
    { name: "Amalner", img: "/images/marketimages/amalner.png" },
    { name: "Jamner", img: "/images/marketimages/jamner.png" },
    { name: "Raver", img: "/images/marketimages/raver.png" },
    { name: "Yawal", img: "/images/marketimages/yawal.png" },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <h1 className="text-center fw-bold mb-5">OUR MARKETS</h1>

      {/* Markets Grid */}
      <div className="row g-4">
        {markets.map((market, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="card shadow-sm h-100 text-center border-0">

              <img
                src={market.img}
                className="card-img-top"
                alt={market.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-semibold">{market.name}</h5>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Market;