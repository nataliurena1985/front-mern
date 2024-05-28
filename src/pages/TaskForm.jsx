import React from "react";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";


import { useParams, useNavigate } from "react-router-dom";
import { createTaskRequest } from "../api/tasks.api";

import { useTasks } from "../context/TaskProvider";

export default function TaskForm() {
  //const { createTask, getTask, updateTask } = useTasks();

  const { createTask } = useTasks();

  const params = useParams();

  console.log(params);


   useEffect(() => {
    
         if (params.id) {
          console.log("loading data")
         }



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
      <h1>{params.id ? "Edit task" : "New task"}</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);

          await createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>description</label>

            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
