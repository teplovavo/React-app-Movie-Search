
import { useState } from "react";

export default function Form(props) {
  // State to hold the form input value
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // Update formData when input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form refresh
    props.moviesearch(formData.searchterm); // Call moviesearch function from props
  };

  // Form JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
