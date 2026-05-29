import { useForm } from "react-hook-form";
import Button from "./Button";

function ContactForm({ onSubmit, isSubmitting }) {
    // I'm using useForm to handle form state and validation.
    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <form >
            <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
            />
            {errors.name && <p>Name is required</p>}
        </form>
    )
}

export default ContactForm;