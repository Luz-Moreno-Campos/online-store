import Button from "./Button";

function SecondaryBanner () {
    return (
        <section className="secondary-banner">
            <div className="overlay">
                <div className="banner-content">
                    <h1>Timeless Style <br /><span>&amp; Modern Elegance</span></h1>
                    <p>
                        Discover premium clothing designed for confidence, comfort, and
                        effortless everyday wear.
                    </p>
                    <div className="banner-buttons">
                        <Button
                            label="SHOP COLLECTION"
                            to="/"
                            variant="primary"
                        /><Button
                            label="CONTACT US"
                            to="/contact"
                            variant="secondary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecondaryBanner;