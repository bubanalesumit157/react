import PropTypes from 'prop-types';
import propTypes from 'prop-types'
function List(props){

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) //alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name))  //alphabetical order
    // fruits.sort((a,b) => b.calories - a.calories)  //most calories order
    // fruits.sort((a,b) => a.calories - b.calories)  //least calories order
    
    const fruits = props.fruits;

    const lowCalFruit = fruits.filter( (fruit) => fruit.calories < 100 )
    const highCalFruit = fruits.filter( (fruit) => fruit.calories >= 100 )
    const listItems = fruits.map( (fruit)  => <li key={fruit.id} >{fruit.name}: &nbsp; <b> {fruit.calories}</b></li>)
    const highCal = highCalFruit.map( (fruit)  => <li key={fruit.id} >{fruit.name}: &nbsp; <b> {fruit.calories}</b></li>)
    const lowCal = lowCalFruit.map( (fruit)  => <li key={fruit.id} >{fruit.name}: &nbsp; <b> {fruit.calories}</b></li>)
    
    return(
        // fruits  need to enclode fruits with {} if written inside <></>
        <>
        
        <ol>
            <h2>Category:{props.category}</h2>
            <h2>fruits</h2>
            {listItems}
            <br />
            <h2>Low cal fruits</h2>
            {lowCal}
            <br />
            <h2>High cal fruits</h2>
            {highCal}
        </ol>
        </>
    )
} 
List.defaultProps = {
    fruits: [],
    category: "none"
}
List.propTypes = {
    fruits: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number})),
    category: PropTypes.string
}
export default List;