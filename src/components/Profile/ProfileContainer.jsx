import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { setUserProfile } from "./../../Redux/profile-reducer"
import { withRouter } from "react-router"
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19539;
        }
        profileAPI.getUser(userId)
            .then(response => {
                this.props.setUserProfile(response);
            });
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

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)