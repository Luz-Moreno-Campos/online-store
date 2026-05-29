import Button from "./Button";

function SecondaryBanner () {
    return (
        <section className="secondary-banner">
            <div className="overlay">
                <div className="banner-content">
                    <h1>Spring is blooming, and so are you.</h1>
                    <p>
                        Referesh your style with <span>50% off</span> selected items.
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