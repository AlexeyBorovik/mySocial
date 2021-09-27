import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { setUser, getStatus, updateStatus } from "./../../Redux/profile-reducer"
import { withRouter } from "react-router"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends React.Component {

    componentDidMount() {

        this.props.setUser(this.props.match.params.userId)
        setTimeout(() => {
            this.props.getStatus(this.props.match.params.userId)
        })
        
    }

    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { setUser, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect

)(ProfileContainer)
