import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>
          <Typewriter
            words={["Hi, I’m Jenny Yang 🤗","So happy that you are here"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p>
          Welcome to my little corner of the internet 🚀
        </p>
<img
  src="/images/OLU5919.jpg"
  alt="Jenny Yang"
  style={{
    width: '200px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px',
    marginTop: '2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}
/>
      </header>

      <section className="quick-bio">
        <h2>✨ Little Things About Me</h2>
        <ul>
          <li>📍 From Colonial Heights, VA</li>
          <li>🎓 Vanderbilt '26 • Econ + Business & DS </li>
          <li>🧠 Currently a tax consultant @BDO Mclean</li>
          <li>🌱 enjoys matcha, cooking, thrifting, and exploring</li>
        </ul>
      </section>

      <section className="journal">
  <h2>📝 Verse of the Day</h2>
  <blockquote>"When the time is right, I, the Lord, will make it happen.",
    -"Isaiah 60:22"</blockquote>
</section>


      <div className="project-grid">
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3> 🔆 likes </h3>
    <p>walks, working out, cleaning, watching shows</p>
  </motion.div>

  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h3> 🌻 budding interests </h3>
    <p> coding, finance, fashion</p>
  </motion.div>

  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <h3> 💌 Loves </h3>
    <p>God, family, friends</p>
  </motion.div>
</div>

      <section className="goals">
        <h2>🎯 Where I'm Headed</h2>
        <ul>
          <li> Finish senior year strong @ Vandy</li>
          <li> Explore consulting & accounting opportunities</li>
          <li> Dive deeper into investing + data storytelling</li>
          <li> Travel more and stay grounded in faith & wellness</li>
        </ul>
      </section>

      <section className="reflect">
        <h2>🪞Things I'm Learning</h2>
        <ul>
          <li> It’s okay to say no and rest</li>
          <li> Small habits compound over time</li>
          <li> God’s timing is real</li>
        </ul>
      </section>


<section className="qa-box">
  <h2>💬 Ask Me Anything</h2>
  <p>Drop an anonymous message or question below — I’ll try to answer it in a future blog or post!</p>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdaecxCSBvnlJXer6Iie1Qc-8FWi3el_frdByqncMOMef9htw/viewform?embedded=true"
    width="100%"
    height="700"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    title="Ask Jenny Anything"
    style={{
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      backgroundColor: '#fff'
    }}
  >
    Loading…
  </iframe>
</section>

      <section className="contact">
        <h2>📬 Let’s Connect</h2>
        <p>Email: <a href="mailto:jenny.yang@vanderbilt.edu">jenny.yang@vanderbilt.edu</a></p>
        <p>GitHub: <a href="https://github.com/jennyyang5" target="_blank" rel="noreferrer">jennyyang5</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jennyyang55/" target="_blank" rel="noreferrer">/in/jennyyang55</a></p>
        <p>Instagram: <a href="https://www.instagram.com/jenny.yang5" target="_blank" rel="noreferrer">@jenny.yang5</a></p>
    </section>
    </div>
  );
}

export default App;
