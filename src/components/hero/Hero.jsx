import './hero.css'
export default function Hero() {
  return (
    <div>
      <section id="hero" className='card'>
        <div className="intro">
            <h3>Hello, I am Aryan Gupta<span className="span_text">Java Full Stack Developer and ML/DS enginner</span></h3>
            <p>Full Stack Developer and Machine Learning Enthusiast focused on creating responsive web applications,
                AI-powered systems, and data-driven solutions that deliver meaningful impact.</p>
        </div>

        <div>
                  <img src="src\assets\hero.png" alt="Profile_Image"  className="profile"/>
        </div>
      </section>
    </div>
  )
}
