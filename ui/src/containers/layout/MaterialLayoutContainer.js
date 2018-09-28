import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MaterialLayout from 'components/layout/MaterialLayout';

const mapStateToProps = () => ({

});
export default connect(mapStateToProps, { push })(MaterialLayout);
