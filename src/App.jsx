import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

const App = () => {
  return (
    <div>
      <Navbar />

      <div>
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />

            <Route path="/new" element={<TaskForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
