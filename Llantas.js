import { useState, useEffect } from "react";
import "../css/Llantas.css";

const initialDb = [
  {
    0: "1",
    id: "1",
    1: "Llanta 1",
    nombre: "Llanta 1",
    2: "Continental",
    marca: "Continental",
    3: "155/80/R12",
    medida: "155/80/R12",
    4: "155",
    ancho: "155",
    5: "80",
    perfil: "80",
    6: "12",
    rin: "12",
    7: "45.00",
    precio: "45.00",
  },
  {
    0: "2",
    id: "2",
    1: "Llanta 2",
    nombre: "Llanta 2",
    2: "General Tires",
    marca: "General Tires",
    3: "165/70/R12",
    medida: "165/70/R12",
    4: "165",
    ancho: "165",
    5: "70",
    perfil: "70",
    6: "12",
    rin: "12",
    7: "55.00",
    precio: "55.00",
  },
  {
    0: "3",
    id: "3",
    1: "Llanta 3",
    nombre: "Llanta 3",
    2: "Barum",
    marca: "Barum",
    3: "175/70/R12",
    medida: "175/70/R12",
    4: "175",
    ancho: "175",
    5: "70",
    perfil: "70",
    6: "12",
    rin: "12",
    7: "55.00",
    precio: "55.00",
  },
  {
    0: "4",
    id: "4",
    1: "Llanta 4",
    nombre: "Llanta 4",
    2: "Continental",
    marca: "Continental",
    3: "175/70/R13",
    medida: "175/70/R13",
    4: "175",
    ancho: "175",
    5: "70",
    perfil: "70",
    6: "13",
    rin: "13",
    7: "55.00",
    precio: "55.00",
  },
  {
    0: "5",
    id: "5",
    1: "Llanta 5",
    nombre: "Llanta 5",
    2: "General Tires",
    marca: "General Tires",
    3: "185/70/R13",
    medida: "185/70/R13",
    4: "185",
    ancho: "185",
    5: "70",
    perfil: "70",
    6: "13",
    rin: "13",
    7: "60.00",
    precio: "60.00",
  },
  {
    0: "6",
    id: "6",
    1: "Llanta 6",
    nombre: "Llanta 6",
    2: "Barum",
    marca: "Barum",
    3: "175/70/R14",
    medida: "175/70/R14",
    4: "175",
    ancho: "175",
    5: "70",
    perfil: "70",
    6: "14",
    rin: "14",
    7: "50.00",
    precio: "50.00",
  },
];

const Llantas = () => {
  const [todos, setTodos] = useState(initialDb);
  //const [todos, setTodos] = useState();
  const [anchos, setAnchos] = useState();
  const [perfiles, setPerfiles] = useState();
  const [rines, setRines] = useState();

  function listarLlantas() {
    var posts = null;
    var url = "/webservice/listado_llantas.php";
    var url2 = "http://localhost:8181/llantera/webservice/listado_llantas.php";
    fetch(url2)
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
      });
  }

  function listarAnchoLlantas() {
    var url = "/webservice/listado_ancho_llantas.php";
    var url2 =
      "http://localhost:8181/llantera/webservice/listado_ancho_llantas.php";
    fetch(url2)
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setAnchos(data);
      });
  }

  function listarPerfilLlantas() {
    var url = "/webservice/listado_ancho_llantas.php";
    var url2 =
      "http://localhost:8181/llantera/webservice/listado_perfil_llantas.php";
    fetch(url2)
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setPerfiles(data);
      });
  }

  function listarRinLlantas() {
    var url = "/webservice/listado_ancho_llantas.php";
    var url2 =
      "http://localhost:8181/llantera/webservice/listado_rin_llantas.php";
    fetch(url2)
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setRines(data);
      });
  }

  function listarLlantasPorMedida() {
    var ancho = document.getElementById("lista_ancho").value;
    var perfil = document.getElementById("lista_perfil").value;
    var rin = document.getElementById("lista_rin").value;
    var url = "/webservice/listado_llantas.php";
    var url2 =
      "http://localhost:8181/llantera/webservice/listado_llantas_por_medida.php?ancho=" +
      ancho +
      "&perfil=" +
      perfil +
      "&rin=" +
      rin +
      "";
    fetch(url2)
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
      });
  }

  useEffect(() => {
    listarLlantas();
  }, []);

  useEffect(() => {
    listarAnchoLlantas();
  }, []);

  useEffect(() => {
    listarPerfilLlantas();
  }, []);

  useEffect(() => {
    listarRinLlantas();
  }, []);

  return (
    <div>
      <header>
        <div className="wave">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="svg_css"
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="path_css"
            ></path>
          </svg>
        </div>
        <section className="textos-header">
          <br />
          <br />

          <h2>LLANTAS</h2>
        </section>
      </header>
      <div className="busqueda-llantas">
        <h2 className="texto-filtro">Buscar por:</h2>
        <table>
          <thead>
            <tr>
              <th>Ancho</th>
              <th>Perfil</th>
              <th>Rin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select id="lista_ancho">
                  <option value="ancho">-- Todos --</option>
                  {!anchos
                    ? "Loading..."
                    : anchos.map((ancho_llanta, index) => (
                        <option key={index} value={ancho_llanta.ancho}>
                          {ancho_llanta.ancho}
                        </option>
                      ))}
                </select>
              </td>
              <td>
                <select id="lista_perfil">
                  <option value="perfil">-- Todos --</option>
                  {!perfiles
                    ? "Loading..."
                    : perfiles.map((perfil_llanta, index) => (
                        <option key={index} value={perfil_llanta.perfil}>
                          {perfil_llanta.perfil}
                        </option>
                      ))}
                </select>
              </td>
              <td>
                <select id="lista_rin">
                  <option value="rin">-- Todos --</option>
                  {!rines
                    ? "Loading..."
                    : rines.map((rin_llanta, index) => (
                        <option key={index} value={rin_llanta.rin}>
                          {rin_llanta.rin}
                        </option>
                      ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={listarLlantasPorMedida}>Buscar</button>
      </div>
      <div className="listado-llantas">
        {!todos ? (
          "Cargando..."
        ) : todos.length < 1 ? (
          <h2>No se encontraron resultados</h2>
        ) : (
          todos.map((todo, index) => {
            return (
              <div key={index} className="cont-llantas">
                <img
                  className="img-llantas"
                  src={`/images/${todo.id}.jpg`}
                  //src={`http://127.0.0.1:8181/llantera/images/${todo.id}.jpg`}
                />
                <div className="texto-llantas">
                  <h1>{todo.nombre}</h1>
                  <p>Marca: {todo.marca}</p>
                  <p>Medida: {todo.medida}</p>
                  <p>Ancho: {todo.ancho}</p>
                  <p>Perfil: {todo.perfil}</p>
                  <p>Rin: {todo.rin}</p>
                  <p>Precio: ${todo.precio}</p>
                  <p></p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Llantas;
