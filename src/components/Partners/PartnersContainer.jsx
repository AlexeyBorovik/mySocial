import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unFollowAC } from "../Redux/partners-reducer";
import Partners from "./Partners";
import React from 'react';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader'


class PartnersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (<div>
            {this.props.isFetching ? <Preloader/> : null }

            <Partners
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                selectedPage={this.props.selectedPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />
        </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.partnersPage.users,
        pageSize: state.partnersPage.pageSize,
        totalUsersCount: state.partnersPage.totalUsersCount,
        currentPage: state.partnersPage.currentPage,
        isFetching: state.partnersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer)