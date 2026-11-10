import './hero.css'
export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <div className="intro">
            <h3>
              Hello, I am Aryan Gupta
              <span className="span_text">
                Java Full Stack Developer and ML/DS Engineer
              </span>
            </h3>

            <p>
              Full Stack Developer and Machine Learning Enthusiast
              focused on creating responsive web applications,
              AI-powered systems, and data-driven solutions
              that deliver meaningful impact.
            </p>

            <div className="hero-buttons">
              <a href= '/Resume.docx' download = "Resume.docx" className='btn btn-primary btn-download'>Download CV</a>
              <button className='btn btn-primary '>Contact Me</button>
            </div>
          </div>

          <div className="hero-image">
            <img src="src\assets\profile_02.jpg" alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  )
}
