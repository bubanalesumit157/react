import PropTypes from 'prop-types'

function Student(props){
    const styles={
        border:"2px solid black",
        margin:"10px",
        padding:"10px 10px"

    }
    return(
        <div style={styles}>
            <p>Name: {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no" }</p>
        </div>
    )
}

Student.prototypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "guest",
    age: 20,
    isStudent: true,
}
export default Student