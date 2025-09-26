import { useDispatch } from 'react-redux';
import { decreate, increate, onreset } from '../redux/slices/counter.slice';
import { useAppSelector } from '../hooks/useRedux';
export default function Counter() {

    const {value} = useAppSelector((store) => store.counter)
    const dispatch = useDispatch();
    
    const handleIncreate = () => {
        dispatch(increate())
    }
    const handleDecreate = () => {
        dispatch(decreate())
    }
    const handleReset = () => {
        dispatch(onreset())
    }
  return (
    <div>
        <h2>Counter: {value}</h2>
        <button onClick={handleIncreate}>Increate</button>
        <button onClick={handleDecreate}>Decreate</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
