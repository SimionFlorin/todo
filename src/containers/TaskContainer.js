import {updateTaskStatus} from '../actions';

import {connect} from 'react-redux';
import Task from '../components/Task';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    updateTaskStatusDispatch: (id, status) => dispatch(updateTaskStatus(id, status))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)
