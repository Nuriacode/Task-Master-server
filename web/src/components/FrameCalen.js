import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import 'moment/locale/es';
import 'moment-timezone';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/frameCalen.scss";
import Card from "./Card";
import TaskList from "./TaskList";
import TaskListDoneComponent from "./TaskListDoneComponent";
import ButtonReset from "./Reset";
import objectToExport from "../services/localStorage";


moment.tz.names("Europe/Paris|Europe/Monaco");
const localizer = momentLocalizer(moment);
moment.locale('es');
moment.tz.link("Europe/Paris|Europe/Monaco");



const FrameCalen = () => {
  
  const [id, setId] = useState(0 + 1)
  const [dataTask, setDataTask] = useState({
    title: "",
    start: "",  
    end: "",
    desc: "",
    type: "",
    done:false,
    id: 0,
  });
  const [taskList, setTaskList] = useState(objectToExport.get("tasks", []));
  // const [taskList, setTaskList] = useState([]);
  const [taskListDone, setTaskListDone] = useState(objectToExport.get("tasks_Done",[]));
  const taskLocalStorage = objectToExport.get("tasks", [])
  const taskDoneLocalStorage = objectToExport.get("tasks_Done",[])
    

  const createId = () => {
      setId(id + 1)
    }

  const setTaskTypeRadio = (value) =>{
    setDataTask({...dataTask, type: value})
  }

  const setTaskDone = (id) =>{
    taskList[id].done = true;
    const taskDone = taskList[id]
    setTaskListDone([...taskListDone, taskDone])
    taskList.splice((id, 1));
    objectToExport.remove("tasks")
    taskDoneLocalStorage.push(taskDone);
    objectToExport.set("tasks", taskList)
    objectToExport.set("tasks_Done", taskDoneLocalStorage)
  }  

  const removeTask = (id) => {
    taskList.splice((id, 1));
  }
  


  const handleInput = (inputName, inputValue) => {
    setDataTask({ ...dataTask, [inputValue]: inputName });
  };

   const getColorTask = (taskType) => {
    if (taskType==='Casa'){
      return 'color_1';
    } else if (taskType==='Ocio'){
      return 'color_2';
    } else if (taskType==='Trabajo'){
      return 'color_3';
    }
  }

  const handleSend = () => {
    if (dataTask.start !== "" && dataTask.end !== "" && dataTask.title !== "") {
      createId()
      setTaskList([...taskList, dataTask]);
      setDataTask({
        title: "",
        start: "",
        end: "",
        desc: "",
        type: "",
        done: false,
        id: id
      });
      taskLocalStorage.push(dataTask);
      objectToExport.set("tasks", taskLocalStorage)
    }
  };



  return (
    <>
    <div className="all">
    <section className="app">
      <Calendar
        className="app__frameCalen"
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={taskList}
      />
      </section>
      <section className="form">
      <h2 className="form__titleTask">TAREAS POR HACER</h2>
      <TaskList
      removeTask={removeTask}
      className="form__taskList"
      setTaskDone={setTaskDone}
      taskList={taskList}
      getColorTask={getColorTask}
      />
      <h2
      className="form__titleTask"
      >TAREAS HECHAS</h2>
      <TaskListDoneComponent
      className="form__taskListDone"
      getColorTask={getColorTask}
      taskListDone={taskListDone}
      />
      <ButtonReset/>
      <Card
        className="form__card"
        dataTask={dataTask}
        handleChangeInput={handleInput}
        handleSend={handleSend}
        setTaskTypeRadio={setTaskTypeRadio}
        taskType={dataTask.type}
        getColorTask={getColorTask}
      />
      </section>
      </div>
    </>
  );
};

export default FrameCalen;
