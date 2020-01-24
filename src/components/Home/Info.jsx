import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolor cum eaque laudantium ea porro officiis quis consectetur
              enim, quidem hic consequatur cupiditate tempora vel nulla sed quos
              sapiente! Quod tenetur, libero odio porro repudiandae nobis
              perferendis sunt a odit error et, sed quas repellat, iste sit
              dolorem modi ad.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
