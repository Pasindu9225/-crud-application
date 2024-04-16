"use client";
import React, { useState, FormEvent } from "react";
import { database, supabase } from "../utils/supabase-client";
import NavBar from "../Components/NavBar";

const AddItemForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //Insert data into Supabase table
      const { data, error } = await supabase
        .from("todo")
        .insert({ title: title, description: description });
      if (error) {
        throw error;
      }
      console.log("Item added successfully:");
      // Reset form fields
      setTitle("");
      setDescription("");
      setError(null);
    } catch (error: any) {
      console.error("Error adding item:", error.message);
      setError("Failed to add item. Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen bg-slate-300 p-5">
      <NavBar buttonLink="/" buttonText="Home" />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
