import { useState } from "react";

const NavEditForm = ({ navItems, setNavItems }) => {
  const [newNavItem, setNewNavItem] = useState({
    title: "",
    url: "",
  });

  const handleChange = (e) => {
    setNewNavItem({
      ...newNavItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the HTTP request to your server API
      const response = await fetch("/admin/addNavItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNavItem),
      });

      if (response.ok) {
        // If the request is successful, update the navItems state with the new item
        const data = await response.json();
        setNavItems([...navItems, data]);

        // Reset the form
        setNewNavItem({
          title: "",
          url: "",
        });
      } else {
        console.error("Failed to add nav item");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="nav-edit-form">
      <input
        type="text"
        name="title"
        value={newNavItem.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="text-black"
      />
      <input
        type="text"
        name="url"
        value={newNavItem.url}
        onChange={handleChange}
        placeholder="URL"
        required
        className="text-black"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NavEditForm;
