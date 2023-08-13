import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, selectAlert } from '../features/counter/alertSlice';
import './Alert.css'

export default function Alert() {
    const dispatch = useDispatch();
    let alertStyle = useSelector(selectAlert);

    function handeClose() {
        dispatch(closeAlert());
    }

    return (
        <div className="alert-container" style={alertStyle}>
            <span className="alert-msg">
                Stay tune, We are working on it!
            </span>
            <span className="alert-close-btn" onClick={handeClose}>X</span>
        </div>
    )
}