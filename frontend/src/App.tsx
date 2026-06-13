import { useState } from "react";
import { api } from "./services/api";

function App() {
  const [city, setCity] = useState("");

  const [response, setResponse] = useState<any>();

  async function handleWeather() {
    try {
      await api.get(`/weather?city=${city}`);
    } catch (err: any) {
      if (err.response?.status === 402) {
        setResponse(err.response.data);
      }
    }
  }

  return (
    <div>
      <h1>Paid Weather API</h1>

      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <button onClick={handleWeather}>Get Weather</button>

      {response && (
        <div>
          <p>
            Price:
            {response.price}
          </p>

          <p>
            Receiver:
            {response.receiver}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
