function CartSummary({ items }) {
    // calculate subtotal
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // 50% discount
    const discount = subtotal * 0.5;
    // price after discount
    const discountedSubtotal = subtotal - discount;
    // tax 10% (applied AFTER discount)
    const tax = discountedSubtotal * 0.1;
    // final total
    const total = discountedSubtotal + tax;

    return (
        <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Discount (50% OFF): -${discount.toFixed(2)}</p>
            <p>After Discount: ${discountedSubtotal.toFixed(2)}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>
    );
}

export default CartSummary;