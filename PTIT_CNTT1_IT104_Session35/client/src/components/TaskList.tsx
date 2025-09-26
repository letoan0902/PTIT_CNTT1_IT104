import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getAllTasks } from '../redux/slices/tasks.slice'

export default function TaskList() {
    const {data, error, status} = useAppSelector((store) => store.tasks)
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        dispatch(getAllTasks())
    }, [])
    console.log(data, error, status);
    
  return (
    <div>TaskList</div>
  )
}
