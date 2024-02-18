import React from "react";

const Testimonial = ({ user }) => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        {user.testimonial.map((item, index) => (
          <div key={index}>
            <TestimonialCard name={item.name} feedback={item.comment} />
          </div>
        ))}
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
