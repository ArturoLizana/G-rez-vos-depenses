/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form className="filros">
        <div className="campo">
          <label htmlFor="cantidad">Filtrer les Dépenses</label>
          <select 
          value={filtro} 
          onChange={ e => setFiltro(e.target.value)}
          >
            <option value="">--Toutes Catégories--</option>
            <option value="Economie">Economie</option>
            <option value="Repas">Repas</option>
            <option value="Maison">Maison</option>
            <option value="DeponsesDiverses">Déponses diverses</option>
            <option value="Loisirs">Loisirs</option>
            <option value="Sante">Santé</option>
            <option value="Abonnements">Abonnements</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
