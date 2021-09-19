import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { setUser } from "./../../Redux/profile-reducer"
import { withRouter } from "react-router"

class ProfileContainer extends React.Component {

    componentDidMount() {

        this.props.setUser(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUser })(WithUrlDataContainerComponent)