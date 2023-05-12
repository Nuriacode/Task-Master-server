import '../styles/Task.scss'

const Task = ({eachTask, getColorTask, setTaskDone, removeTask}) =>{

   const handleClick =(ev)=>{
    const target = ev.currentTarget.id
    setTaskDone(target)
    }
  
    const handleClickIcon = (ev) => {
        const target= ev.target
        removeTask(target)
    }

    return(
        <article 
        id={eachTask.id}
        className={`article ${getColorTask(eachTask.type)}`} 
        onClick={handleClick}
        >
            <div className='article__div'>
                {/* <i className="fa-sharp fa-solid fa-circle-xmark"
                onClick={handleClickIcon}
                ></i> */}
                <h3 className='article__div--title'>{eachTask.title}</h3>
                <p className='article__div--text'>Fecha: {eachTask.start}</p>
                <p className='article__div--text'>Anotacines: {eachTask.desc}</p>
            </div>
        </article>
    )
}

export default Task;