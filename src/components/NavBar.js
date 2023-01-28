
const NavBar = ({ cartItems }) => {
    let total = 0
    let content
    if (cartItems.length === 0) {
        content = <div>Your cart is empty</div>
    } else {
        content =
            cartItems.map(item =>
                <>
                    <tr>
                        <th>{item.name}</th>
                        <th>${item.price}</th>
                        <th>{item.quantity}</th>
                        <th>${item.price * item.quantity}</th>
                    </tr>
                    <div className="none">{total += item.price * item.quantity}</div>
                </>
            )
    }

    return (
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li className='cart'>
                    <a href='/cart'>Cart <span className="cart-length">{cartItems.length}</span></a>
                    <div className='hover-cart'>
                        <table>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                            {content}
                            <td colspan="4">Total: ${total}</td>
                        </table>
                    </div>
                </li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar