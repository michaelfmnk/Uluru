import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { createPost } from 'actions/posts';
import PostCreation from 'components/Post';

const handlePostCreation = values => {
    console.log(values);
    return createPost({
        content: values.get('content'),
    });
};

const mapDispatchToProps = {
    onSubmitPost: handlePostCreation,
};

const formPostCreation = reduxForm({
    form: 'postCreationForm',
    asyncBlurFields: ['content']
})(PostCreation);

export default connect(undefined, mapDispatchToProps)(formPostCreation);
