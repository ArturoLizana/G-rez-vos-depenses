/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Tous les champs sont requis");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <form
        action=""
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>
          {gastoEditar.nombre ? "Modifier la Dépense" : "Nouvelle déponse"}{" "}
        </legend>
        {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nom de la Déponse</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ajouter le nom de la déponse"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Montant</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Ajouter le montant des déponse: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Catégorie</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Sélectionner--</option>
            <option value="Economie">Economie</option>
            <option value="Repas">Repas</option>
            <option value="Maison">Maison</option>
            <option value="DeponsesDiverses">Déponses diverses</option>
            <option value="Loisirs">Loisirs</option>
            <option value="Sante">Santé</option>
            <option value="Abonnements">Abonnements</option>
          </select>
        </div>

        <div>
          <input
            type="submit"
            value={
              gastoEditar.nombre
                ? "Enregistrer les Modifications"
                : "Ajouter la Déponse"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
