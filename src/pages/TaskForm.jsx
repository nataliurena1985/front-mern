import React from "react";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { createTaskRequest } from "../api/tasks.api";

import { useTasks } from "../context/TaskProvider";

export default function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();

  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);

        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  //  useEffect(() => {
  //    const loadTask = async () => {
  //      if (params.id) {
  //        const task = await getTask(params.id);
  //        console.log(task);
  //        setTask({
  //          title: task.title,
  //          description: task.description,
  //        });
  //      }
  //    };
  //    loadTask();
  //  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
            
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit task" : "New task"}
            </h1>
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.title}
            />
            <label className="block">description</label>

            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
