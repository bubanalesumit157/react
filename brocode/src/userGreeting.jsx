import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcome = <h2 className="welcome"> Welcome {props.userName}</h2> 
    const login = <h2 className="login">Pls login</h2>

    return(props.isLoggedIn ?  welcome : login )
}

UserGreeting.prototypes = {
    isLoggedIn : PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "guest",
}
export default UserGreeting