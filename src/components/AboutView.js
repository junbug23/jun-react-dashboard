// src/components/AboutView.js
import React from 'react';

function AboutView() {
  return (
    <div className="about-view-container">
      <section className="row" style={{ display: 'flex', gap: '15px' }}>
        <div className="box" style={{ flex: 1 }}>
          <h3>About Me</h3>
          <p>
            Hello, my name is Jun Brooks. I am a bilingual computer science student (fluent in English and Japanese) set to graduate in the spring of 2027. Having lived in Japan for over ten years, I bring a global perspective to my work and life. Outside of technology and my close family of four siblings, my greatest passion is exploring the natural world.
          </p>
        </div>

        <div className="box" style={{ flex: 1 }}>
          <h3>Hobbies & Interests</h3>
          <p>
            I enjoy playing the guitar and exploring different chord progressions, which allows me to be creative and experiment with new sounds and styles. In my free time, I enjoy playing basketball, staying active, and watching action-packed Marvel films. Spider-Man is my favorite character of all time because of his story and personality.
          </p>
        </div>
      </section>

      <section className="box">
        <h3>Technical Interest</h3>
        <p>
          I appreciate the clean structure and clarity that comes with web layout development. It is intriguing to explore how applications work behind the scenes and identify how modern systems are cleanly designed, managed, and secured.
        </p>
      </section>
    </div>
  );
}

export default AboutView;