import { connect } from "react-redux";
import { follow, getUsers, unFollow, getDataPageChange } from "./../../Redux/partners-reducer";
import Partners from "./Partners";
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class PartnersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {          
        this.props.getDataPageChange(pageNumber, this.props.pageSize)
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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.partnersPage.isFetching,
        followingInProgress: state.partnersPage.followingInProgress,
    }
}

//let AuthRedirectComponent = connect()(withAuthRedirect(PartnersContainer))


export default withAuthRedirect
(connect(mapStateToProps, 
    {follow, unFollow,  getUsers, getDataPageChange})
(PartnersContainer))