import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPostActionCreator } from './../../Redux/news-reducer';
import News from './News';


const mapStateToProps = (state) => {
    return {
        post: state.newsPage.post,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const NewsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(News)

export default NewsContainer;