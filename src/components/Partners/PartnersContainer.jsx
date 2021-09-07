import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../Redux/partners-reducer";
import Partners from "./Partners";


const mapStateToProps = (state) => {
    return {
        user: state.partnersPage.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (user) => {
                dispatch(setUsersAC(user))
            }
        }
    }

const PartnersContainer = connect(mapStateToProps, mapDispatchToProps)(Partners)


export default PartnersContainer