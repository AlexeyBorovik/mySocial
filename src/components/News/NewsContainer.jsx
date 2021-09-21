import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPostActionCreator, updateNewPostActionCreator } from './../../Redux/news-reducer';
import News from './News';


const mapStateToProps = (state) => {
    return {
        post: state.newsPage.post,
        newPostText: state.newsPage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const NewsContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(News)

export default NewsContainer;