import { useForm } from "react-hook-form";
import Button from "./Button";

function ContactForm({ onSubmit, isSubmitting }) {
    // I'm using useForm to handle form state and validation.
    const { register, handleSubmit, formState: { errors } } = useForm();

    return(
        <form>
            
        </form>
    )
}

export default ContactForm;