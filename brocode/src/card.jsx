import profilePic from "./assets/1.jpg"
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile pic" height={200} width={300}  className="img"/>
            <h2 className="card_title">Sumit</h2>
            <p className="card-text">Im a student in RIT</p>
        </div>
    )
}

export default Card