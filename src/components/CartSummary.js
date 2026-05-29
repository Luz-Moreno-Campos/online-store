function CartSummary({ items }) {
    // calculate subtotal
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
    // tax 10%
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>
    )
}

export default CartSummary;