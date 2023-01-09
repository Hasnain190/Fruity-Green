import Three from "./Three"
import './hero.css'

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className='hero'>
        <div className="hero-container">
          <div className="left">
            <h2>We 'r</h2>
            <h1 className="company-title">Fruity Greens</h1>
            <p>let the juice driping</p>

            {/* tag */}
            <div className="tag">
              JUICES

            </div>

          </div>
          <div className="right">
            <Three></Three>
          </div>

        </div>

      </section>



    </div>
  )
}

export default Hero