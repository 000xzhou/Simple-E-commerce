
const Items = ({ items, cartItems, setCartItems }) => {

    let content
    if (items) {
        content = items.map(item =>
            <div className="padding-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button onClick={() => {
                    cartItems.map(cart => {
                        console.log(`item.id: ${item.id} \t cart.id: ${cart.id} \t ${Object.values(cart)} @ \t ${Object.values(cart).includes(item.id)}`)
                        //Object.values(cart).includes(item.id) ... I'm adding it to all and adding exetra too
                        //cart.id === item.id does not work because it loop though all the cart id so it's both true and false
                        if (Object.values(cart).includes(item.id)) {
                            let newCart = [...cartItems, { ...cart, quantity: cart.quantity++ }]
                            setCartItems(newCart)
                        } else {
                            let newCart = [...cartItems, { id: item.id, name: item.name, price: item.price, quantity: 1 }]
                            setCartItems(newCart)
                        }
                    })
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
            {cartItems.map(i => <p>{i.name} ........ quantity: {i.quantity}</p>)}
        </>
    )

}

export default Items