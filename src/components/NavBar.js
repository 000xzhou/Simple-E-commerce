
const NavBar = ({ cartItems }) => {

    let content
    if (cartItems.length === 0) {
        content = <div>Your cart is empty</div>
    } else {
        content = cartItems.map(item => <div>{item.name} for {item.price}</div>)
    }

    return (
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li className='cart'>
                    <a href='/cart'>Cart</a>
                    <div className='hover-cart'>{content}</div>
                </li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar