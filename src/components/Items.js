
const Items = ({ items, setCartItems }) => {
    let content
    if (items) {
        content = items.map(item =>
            <div className="padding-2">
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button onClick={() => { setCartItems({ name: item.name, price: item.price }) }}>Add to cart</button>
            </div>)
    } else {
        content = <div>Nothing for sale</div>
    }

    return <>{content}</>
}

export default Items