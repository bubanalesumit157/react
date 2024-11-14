function Food(){

    const food1 = "orange"
    const food2 = "apple"
    return(
        <ul>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    )
}

export default Food