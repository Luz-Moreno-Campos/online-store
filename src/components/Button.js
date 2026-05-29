import { Link } from "react-router-dom";

function Button({ label, onClick, type = "button", disabled = false, to, variant = "primary" }) {
    const className = `${variant}-button`;
    if (to) {
        return (
            <Link to={to} className={className}>
                {label}
            </Link>
        );
    }
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {label}
        </button>
    );
}

export default Button;