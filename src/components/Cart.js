
const Cart = ({ cartItems }) => {

    let content
    if (cartItems.length === 0) {
        content = <div>Nothing in cart</div>
    } else {
        content = cartItems.map(item => <div>{item.name} for {item.price}</div>)
    }

    return (
        <div>{content}</div>
    )
}

export default Cart