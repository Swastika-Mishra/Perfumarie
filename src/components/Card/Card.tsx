import './Card.css'

export default function Item(props: any) {
    return (
        <button className='category-buttons'>
            <div className='card'>
                <img src={props.image} alt="" />
                <p>{props.name}</p>
            </div>
        </button>

    )
}