import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/action-creators/TodosActionCreators'
import { bindActionCreators } from 'redux'


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch)
}

