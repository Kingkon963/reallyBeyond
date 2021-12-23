import React from "react";
import Testimonial from "./Testimonial";

interface TestimonialGrid {
  variant: "simple" | "decorated";
}

function TestimonialGrid({ variant }: TestimonialGrid) {
  return (
    <div className="testimonials-grid grid-cols-1 lg:grid-cols-3">
      <Testimonial
        variant={variant}
        author={{ name: "Dr. John Wong", info: "FluidBiotech - Canada" }}
        designElement="circles"
        borderColor="orange"
      >
        Demonstrated incredible determination and technical expertise to get our
        complex website up and running in the shortest time possible. Quality of
        work is excellent. No concerns from our end as a client.
      </Testimonial>
      <Testimonial
        variant={variant}
        author={{ name: "Peter L. Carfagno", info: "Premier Consulting - USA" }}
      >
        Shoaib and his company did a great job with helping us create, design
        and execute two web sites. His creative abilities combined with his
        technical skills made an awesome combination for the work requirements.
        He was professional to deal with in all aspects; the business
        discussions, reliability, delivery on time, meeting attendance, and he
        communicated with us consistently. A Plus-5 Star rating from me!
      </Testimonial>
      <Testimonial
        variant={variant}
        author={{ name: "Luke Hong", info: "iChild Company. Ltd- Singapore" }}
        designElement="blocks"
        borderColor="greenish"
      >
        Very prompt and attentive to details, Honest and Dependable.
      </Testimonial>

      <hr className="col-span-full border mt-10 bg-gray-600 mx-5" />

      <Testimonial
        variant={variant}
        author={{ name: "Adil Ali", info: "Sincere Digital - UK" }}
      >
        Nailed absolutely every element of the work. Understood the brief and
        the quality of the work was fantastic. Would highly recommend!
      </Testimonial>
      <Testimonial
        variant={variant}
        author={{ name: "Josh M.", info: "Lichen - Canada" }}
        designElement="blocks"
        borderColor="greenish"
      >
        <>
          Great work. Built our entire site on React. Created custom graphics
          that are amazing. Communication was smooth and easy.
          <br />
          Highly recommended for quality work. 10/10.
        </>
      </Testimonial>
      <Testimonial
        variant={variant}
        author={{
          name: "Ellie Schwab",
          info: "Mission-Beach House Apartment - Australia",
        }}
        designElement="circles"
        borderColor="orange"
      >
        <>
          Did a terrific job developing a website for our holiday let apartment.
          Very creative, responsive and a pleasure to deal with.
        </>
      </Testimonial>
    </div>
  );
}

export default TestimonialGrid;
