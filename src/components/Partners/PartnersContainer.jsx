import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from "./../../Redux/partners-reducer";
import Partners from "./Partners";
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from "../../api/api";


class PartnersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            })
    }

    render() {
        return (<div>
            {this.props.isFetching ? <Preloader /> : null}

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



export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
}
)
    (PartnersContainer)