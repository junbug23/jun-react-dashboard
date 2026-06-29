import React from 'react';

function AboutView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
      
      {/* Top Section Layout Panels (Your Original Content) */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Panel 1: About Me */}
        <div className="box" style={{ flex: 1, minWidth: '300px' }}>
          <h2>About Me</h2>
          <p>
            Hello, my name is Jun Brooks. I am a bilingual computer science student 
            (fluent in English and Japanese) set to graduate in the spring of 2027. Having 
            lived in Japan for over ten years, I bring a global perspective to my work and 
            life. Outside of technology and my close family of four siblings, my greatest 
            passion is exploring the natural world.
          </p>
        </div>

        {/* Panel 2: Hobbies & Interests */}
        <div className="box" style={{ flex: 1, minWidth: '300px' }}>
          <h2>Hobbies & Interests</h2>
          <p>
            I enjoy playing the guitar and exploring different chord progressions, which 
            allows me to be creative and experiment with new sounds and styles. In my 
            free time, I enjoy playing basketball, staying active, and watching action-packed 
            Marvel films. Spider-Man is my favorite character of all time because of 
            his story and personality.
          </p>
        </div>

      </div>

      {/* Middle Section 1: Lengthy History of Quotes */}
      <div className="box" style={{ width: '100%' }}>
        <h2>History of Quotes</h2>
        <p style={{ marginBottom: '15px' }}>
          One fun fact about quotes is that they have been used for thousands of years to 
          preserve the wisdom and ideas of important people. Before books and the internet 
          were common, people passed down meaningful sayings through storytelling and speeches. 
          These memorable words helped share knowledge from one generation to the next.
        </p>
        <p>
          Quotes have helped people by providing motivation, comfort, and guidance during 
          difficult times. A single sentence from a leader, author, or philosopher can inspire 
          someone to keep going, think differently, or make better decisions. Many famous quotes 
          continue to influence people today because their messages remain meaningful across 
          different cultures and generations.
        </p>
      </div>

      {/* Middle Section 2: Cognitive Impact & Volume of Sayings */}
      <div className="box" style={{ width: '100%' }}>
        <h2>Cognitive Impact & Global Wisdom</h2>
        <p style={{ marginBottom: '15px' }}>
          Millions of quotes have been written and recorded across human history, spanning thousands 
          of languages, philosophical texts, and historic speeches. This massive volume of recorded 
          thought serves as a collective external memory for humanity, distilling complex life lessons 
          into brief, digestible phrases. 
        </p>
        <p>
          Engaging with these expressions provides unique cognitive benefits to the human brain. Reading 
          a powerful quote acts as a form of positive mental priming, rapidly activating neural pathways 
          associated with motivation, critical thinking, and empathy. Because the human brain is highly 
          responsive to metaphors and structured syntax, well-crafted quotes encourage cognitive flexibility, 
          helping individuals reframe stressful situations and look at personal challenges from a healthier 
          perspective.
        </p>
      </div>

      {/* Bottom Section: Fun Facts & Impact */}
      <div className="box" style={{ width: '100%' }}>
        <h2>Fun Facts & Impact</h2>
        <p style={{ marginBottom: '15px' }}>
          One reason I find quotes interesting is that they often express deep ideas in just a few words. 
          Reading quotes from successful people allows me to learn from their experiences without having 
          to go through the same challenges myself. Whether the topic is faith, leadership, or personal 
          growth, quotes can leave a lasting impact.
        </p>
        <p>
          Overall, quotes are more than just words—they are lessons that have stood the test of time. 
          I enjoy discovering new quotes because they encourage me to stay motivated, reflect on my goals, 
          and see situations from different perspectives. It's amazing how one simple sentence can inspire 
          millions of people around the world.
        </p>
      </div>

    </div>
  );
}

export default AboutView;