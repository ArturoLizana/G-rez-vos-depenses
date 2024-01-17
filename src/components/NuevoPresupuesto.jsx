/* eslint-disable react/prop-types */

import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje("Ce n'est pas un budget valide")

            return
        } 

        setMensaje("");
        
        setIsValidPresupuesto(true);
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      
      <form onSubmit={handlePresupuesto} action="" className='formulario'>
        <div className='campo'>
            <label htmlFor="">Définir le Budget</label>

            <input 
            className='nuevo-presupuesto'
            type="number" 
            placeholder='Ajoutez Votre Budget'
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}/>
        </div>

        <input type="submit" value="Ajouter"/>

        {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
