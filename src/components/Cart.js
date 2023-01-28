
const Cart = ({ cartItems }) => {

    let content
    if (cartItems.length === 0) {
        content = <div>Nothing in cart</div>
    } else {
        content = cartItems.map(item => <div>{item.name} for ${item.price}</div>)
    }

    return (
        <>
            <h2>Items in Cart</h2>
            {content}
        </>
    )
}

export default Cart