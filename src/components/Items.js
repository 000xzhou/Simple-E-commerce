
const Items = ({ items, cartItems, setCartItems }) => {

    let content
    if (items) {
        content = items.map(item =>
            <div className="padding-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button onClick={() => {
                    cartItems.map(cart => {
                        console.log(`item.id: ${item.id} \t cart.id: ${cart.id} \t ${Object.values(cart)} @`)
                        //Object.values(cart).includes(item.id) does not work
                        if (Object.values(cart).includes(item.id)) {
                            let newCart = [{ ...cartItems, quantity: cart.quantity++ }]
                            return setCartItems(newCart)
                        } else {
                            let newCart = [...cartItems, { id: item.id, name: item.name, price: item.price, quantity: 1 }]
                            return setCartItems(newCart)
                        }
                    })
                    console.log(cartItems)
                }
                }>Add to cart</button>
            </div >)
    } else {
        content = <div>Products coming soon</div>
    }

    return (
        <>
            <h2>Products</h2>
            {content}
            {cartItems.map(i => <p>{i.name}</p>)}
        </>
    )

}

export default Items