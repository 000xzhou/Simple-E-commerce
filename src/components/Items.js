
const Items = ({ items, cartItems, setCartItems }) => {
    let content
    if (items) {
        content = items.map(item =>
            <div className="padding-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button onClick={() => { setCartItems(itemed => [{ ...itemed }, { name: item.name, price: item.price }]) }}>Add to cart</button>
            </div>)
    } else {
        content = <div>Nothing for sale</div>
    }

    return (
        <>
            <h2>Products</h2>
            {content}
        </>
    )

}

export default Items