import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div class="card p-4 card-compact w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
         {testimonial.des}
        </p>
        <div className="flex items-center py-4">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={testimonial.img} alt="" />
            </div>
          </div>
          <div className="pl-8">
            <h2 class="card-title text-neutral">{testimonial.name}</h2>
            <h4 className="text-sm text-neutral">{testimonial.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
