import { useForm } from "react-hook-form";
import Button from "./Button";

function ContactForm({ onSubmit, isSubmitting }) {
    // I'm using useForm to handle form state and validation.
    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
            />
            {errors.name && <p>Name is required</p>}
            <input
                type="text"
                placeholder="Email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                })}
            />
            {errors.email && <p>Email is invalid or required</p>}
            <textarea
                placeholder="Message"
                {...register("message", { required: true })}
            />
            {errors.message && <p>Message is required</p>}
            <Button
                label={isSubmitting ? "Sending..." : "Send Message"}
                type="submit"
                disabled={isSubmitting}
            />
        </form>
    )
}

export default ContactForm;