import SecondaryBanner from "../components/SecondaryBanner";
import Button from "../components/Button";

function About () {
    return (
        <div className="about-page">
            <section className="about-story container">
                <div className="about-story__grid">
                    <div className="about-story__text">
                        <span className="about-label">Our Story</span>
                        <h2>Modern style,<br /> <em>made for everyday life</em></h2>
                        <p>
                            Urban Fit & Co. was created with a simple vision —
                            to make clothing that blends comfort, quality, and
                            modern style seamlessly into everyday life.

                        </p>
                        <p>
                            We believe fashion should not feel complicated.
                            It should be effortless, adaptable, and expressive.
                            That is why every piece we design is built with
                            versatility in mind — allowing you to move confidently
                            from casual moments to more refined occasions.
                        </p>
                        <p>
                            Inspired by the energy of urban culture, our collections
                            are made for individuals who want to look sharp without
                            sacrificing comfort. From relaxed fits to clean silhouettes,
                            Urban Fit & Co. celebrates authenticity and everyday confidence.
                        </p>
                        <p>
                            Whether you're heading out for a busy day or keeping things
                            simple and relaxed, our clothing is designed to fit your lifestyle.
                        </p>

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About