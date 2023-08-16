import { useDispatch, useSelector } from 'react-redux';
import { closeAlert, selectAlert } from '../features/counter/alertSlice';
import './css/Alert.css'
import { useEffect } from 'react';

export default function Alert() {
  const dispatch = useDispatch();
  let showAlert = useSelector(selectAlert);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch(closeAlert());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatch]);

  return (
    showAlert && (
      <div className="alert-container" >
        <span className="alert-msg">
          Stay tune, We are working on it!
        </span>
        <span className="alert-close-btn" onClick={() => dispatch(closeAlert())}>X</span>
      </div>
    )
  )
}

// onClick={handeClose}
// style={alertStyle}