import { useState } from "react";
import { supabase } from "../../data/data";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    information: "",
    number_of_persons: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("anmalningar")
        .insert([formData]);

      if (error) throw error;

      alert("Anmälan skickad!");
      setFormData({
        name: "",
        information: "",
        number_of_persons: 1,
      });
    } catch (error) {
      console.error("Fel vid anmälan:", error);
      alert("Något gick fel, försök igen");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>OSA till årets fest</h1>
      <div>
        <label>Namn:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Information:</label>
        <textarea
          name="information"
          value={formData.information}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Antal personer:</label>
        <input
          type="number"
          name="number_of_persons"
          value={formData.number_of_persons}
          onChange={handleChange}
          min="1"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Skickar..." : "Anmäl dig"}
      </button>
    </form>
  );
};
