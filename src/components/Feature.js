import React from "react"
import { toursData } from "../data"

const Feature = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          {toursData.map((tour, index) => {
            return (
              <article className="tour-card" key={index}>
                <div className="tour-img-container">
                  <img src={tour.src} className="tour-img" alt="" />
                  <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {tour.country}
                    </p>
                    <p>{tour.days}</p>
                    <p>{tour.price}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Feature
