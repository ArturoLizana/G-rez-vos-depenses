/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";

import IconAhorro from "../img/icono_ahorro.svg";
import IconCasa from "../img/icono_casa.svg";
import IconComida from "../img/icono_comida.svg";
import IconGasto from "../img/icono_gastos.svg";
import IconOcio from "../img/icono_ocio.svg";
import IconSalud from "../img/icono_salud.svg";
import IconSuscripcion from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  Economie: IconAhorro,
  Repas: IconComida,
  Maison: IconCasa,
  DeponsesDiverses: IconGasto,
  Loisirs: IconOcio,
  Sante: IconSalud,
  Abonnements: IconSuscripcion,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Modifier</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Supprimer
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria"> {categoria} </p>
              <p className="nombre-gasto"> {nombre} </p>
              <p className="fecha-gasto">
                {" "}
                Ajouté le: {""} <span> {formatearFecha(fecha)} </span>{" "}
              </p>
            </div>
          </div>
          <p className="cantidad-gasto"> €{cantidad} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
