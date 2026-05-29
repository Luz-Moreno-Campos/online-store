function CartSummary({ items }) {
    // calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // tax 10%
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

    return(
        <div>
        </div>
    )
}

export default CartSummary;