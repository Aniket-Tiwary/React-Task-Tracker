import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meet Didi",
      day: "Feb 5th at 3:30 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "BasketBall Practise",
      day: "Feb 5th at 5:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Family Dinner",
      day: "Feb 5th at 9:00 PM",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Present at the moment !!"
      )}
    </div>
  );
}

export default App;
