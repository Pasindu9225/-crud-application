"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import { supabase } from "../utils/supabase-client";

const Hero = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase.from("todo").select("*");
      if (error) {
        throw error;
      }
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const { error } = await supabase.from("todo").delete().eq("id", taskId);
      if (error) {
        throw error;
      }
      // Remove the deleted task from the tasks state
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
    // Add your edit logic here
  };

  return (
    <div className="w-full h-auto bg-slate-300 p-5">
      <NavBar buttonLink="/AddPage" buttonText="Add" />
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 w-full h-auto min-h-screen bg-slate-900 bg-opacity-85 shadow-lg mt-3 px-6 py-7">
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            description={task.description}
            onDelete={() => handleDelete(task.id)}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
