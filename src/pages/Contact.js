import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Connected to your ContactForm
    const handleSubmit = (formData) => {
        setIsSubmitting(true);
        // simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
        }, 1000);
    };
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We will get back to you within 24 hours.</p>
            </div>
            <div className="contact-body">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <div className="contact-item">
                        <FaEnvelope />
                        <span>hello@urbanfitco.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhone />
                        <span>+1 555 123 4567</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Toronto, Canada</span>
                    </div>
                </div>
                <div className="contact-form-wrap">
                    {success ? (
                        <div className="contact-success">
                            <h3>Message Sent!</h3>
                            <p>We wll get back to you soon.</p>
                            <button onClick={() => setSuccess(false)}>
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <ContactForm
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}

export default Contact;