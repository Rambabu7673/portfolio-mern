
import React, { useState } from "react";
import api from "../../../api/admin.js";

const AddProject = () => {
  const [form, setForm] = useState({
    projectName: "",
    projectDescription: "",
    projectLink: "",
    image: null,
    tech: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmitted = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("projectName", form.projectName);
      formData.append("projectDescription", form.projectDescription);
      formData.append("projectLink", form.projectLink);
      formData.append("image", form.image);
      formData.append("tech", form.tech);

      const response = await api.post(
        "/add/project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      alert("Project Added Successfully");

      setForm({
        projectName: "",
        projectDescription: "",
        projectLink: "",
        image: null,
        tech: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error Adding Project");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <form
        onSubmit={handleSubmitted}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Add Project
        </h1>

        {/* Project Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Project Name
          </label>

          <input
            type="text"
            name="projectName"
            value={form.projectName}
            onChange={handleChange}
            placeholder="Enter Project Name"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {/* Project Description */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Project Description
          </label>

          <textarea
            name="projectDescription"
            value={form.projectDescription}
            onChange={handleChange}
            rows="5"
            placeholder="Enter Project Description"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {/* Project Link */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Project Link
          </label>

          <input
            type="url"
            name="projectLink"
            value={form.projectLink}
            onChange={handleChange}
            placeholder="https://example.com"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Technologies Used
          </label>

          <input
            type="text"
            name="tech"
            value={form.tech}
            onChange={handleChange}
            placeholder="React,Tailwind CSS,Node.js,MongoDB,Express.js"
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Project Image
          </label>

          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

