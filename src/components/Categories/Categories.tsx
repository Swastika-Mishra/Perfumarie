import './Categories.css'
import data from '../../assets/category_data'
import Card from '../Card/Card.js'

const Categories = () => {
    return (
        <>
            <hr />
            <div className="categoral-item">
                {data.map((item, i) => {
                    return (<Card key={i} name={item.name} image={item.image} />)
                })}
            </div>
        </>
    )
}
export default Categories