import { useState } from "react";
import { supabase } from "../../data/data";
import './Form.css'

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    information: "",
    phone: "",
    extra_day: false,
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
        phone: "",
        extra_day: false,
      });
    } catch (error) {
      console.error("Fel vid anmälan:", error);
      alert("Något gick fel, försök igen");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
<div className="information-page">

    <div className="amber infoContainer">
    <h1>Glöm inte!!!</h1>
    <h4>Att fylla i formuläret för varje person som kommer, även om det är en +1</h4>
  </div>


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
        <label>Telefonnummer:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          />
      </div>

      <div>
        <label>Information / allergier:</label>
        <textarea
          name="information"
          value={formData.information}
          onChange={handleChange}
          />
      </div>

      {/* <div>
        <label>Antal personer:</label>
        <input
          type="number"
          name="number_of_persons"
          value={formData.number_of_persons}
          onChange={handleChange}
          min="1"
          />
      </div> */}

      <div>
        <label>
          <input
            type="checkbox"
            name="extra_day"
            checked={formData.extra_day}
            onChange={handleChange}
            />
          Jag kommer på fredag också!
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Skickar..." : "ANMÄL DIG"}
      </button>
    </form>
      <div className='mountainContainer'> 
      </div>
    </div>
  );
};