
const Items = ({ items, cartItems, setCartItems }) => {
    const addtoCart = (item) => {
        const exist = cartItems.find(x => x.id === item.id)
        if (exist) {
            const newCartItems = cartItems.map(cart =>
                cart.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : cart
            )
            setCartItems(newCartItems)
        } else {
            const newCartItems = [...cartItems, { ...item, quantity: 1 }]
            setCartItems(newCartItems)

        }
    }

    let content
    if (items) {
        content = items.map(item =>
            <div className="padding-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button onClick={() => addtoCart(item)}>Add to cart</button>
            </div >)
    } else {
        content = <div>Products coming soon</div>
    }

    return (
        <>
            <h2>Products</h2>
            {content}
        </>
    )

}

export default Items