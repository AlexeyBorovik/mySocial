import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from "../Redux/partners-reducer";
import Partners from "./Partners";


const mapStateToProps = (state) => {
    return {
        users: state.partnersPage.users,
        pageSize: state.partnersPage.pageSize,
        totalUsersCount: state.partnersPage.totalUsersCount ,
        currentPage: state.partnersPage.currentPage
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
        setUsers: (users) => {
                dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }, 
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }}
    }

const PartnersContainer = connect(mapStateToProps, mapDispatchToProps)(Partners)


export default PartnersContainer