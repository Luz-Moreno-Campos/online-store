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
                        <Button label="SHOP COLLECTION" to="/" />
                    </div>
                    <div className="about-story__image">
                        <img
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDI%3D"
                            alt="Fashion"
                        />
                    </div>
                </div>
            </section>
            <section className="about-values container">
                <h2 className="section-title">What We Stand For</h2>
                <div className="about-values__grid">
                    <div className="about-value">
                        <h3>Quality Fabric</h3>
                        <p>
                            We carefully select durable, premium materials that
                            feel comfortable on the skin while maintaining their
                            shape and finish over time.
                        </p>
                    </div>
                    <div className="about-value">
                        <h3>Clean Design</h3>
                        <p>
                            Our designs focus on simplicity and timeless style,
                            ensuring every piece remains relevant beyond seasonal trends.
                        </p>
                    </div>
                    <div className="about-value">
                        <h3>Comfort First</h3>
                        <p>
                            Every garment is designed with everyday movement in mind,
                            giving you confidence and ease throughout your day.
                        </p>
                    </div>
                    <div className="about-value">
                        <h3>Urban Inspiration</h3>
                        <p>
                            Rooted in modern city culture, our collections reflect
                            individuality, diversity, and self-expression.
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-mission container">
                <h2 className="section-title">Our Mission</h2>
                <p>
                    At Urban Fit & Co., our mission is to empower individuals
                    through fashion that feels as good as it looks. We aim to
                    create clothing that supports confidence, embraces simplicity,
                    and adapts effortlessly to modern lifestyles.
                </p>
                <p>
                    We are committed to delivering style that is accessible,
                    reliable, and designed with purpose — because what you wearshould reflect who you are.
                </p>
            </section>
        </div>
    )
}

export default About