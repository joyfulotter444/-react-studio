// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return <div> 
        <h1> {props.item.name}</h1>
    <p> {props.item.description} </p>
    <img src = {props.item.image} alt = {props.item.description}/>
    <p> {props.item.price} </p>
    <button onClick={() => {props.Click(props.item)}}>Add to Cart</button>
    </div>
    
    
}
