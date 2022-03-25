import React from "react";
import { url } from "../utils/url";

interface IDatos {
  data: any[];
  status: number;
  cargando: boolean;
}

export default function FetchDataa() {
  const [datos, setDatos] = React.useState<IDatos>({
    data: [],
    status: 0,
    cargando: false,
  });

  async function peticionAController() {
    setDatos({ data: [], status: 200, cargando: true });

    const response = await fetch(`${url}WeatherForecast`);
    const data = await response.json();

    setDatos({ data, status: response.status, cargando: false });
  }

  React.useEffect(() => {
    (async () => {
      peticionAController();
    })();
  }, []);

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>Es un componente de demostracion para pedir datos al servidor.</p>
      {datos.cargando ? (
        <p>
          <em>cargando...</em>
        </p>
      ) : (
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {datos.data.map((forecast) => (
              <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
