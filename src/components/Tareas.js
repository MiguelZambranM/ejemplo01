/*Componente que muestra la actividades (tareas) diarias de un persona*/

import React from 'react'

function Tareas() {
    const listadoTar=[
        {
            titulo: "Estudiar Fisica", responsable: "Miguel Zambrano", descripcion: "Leer capitulo 4 pagona 20", prioridad: "Media"
        },
        {
            titulo: "Reperar computadora", responsable: "Santiago Sosa", descripcion: "Cambiar el disco duro", prioridad: "Alta"
        },
        {
            titulo: "Hacer la cena", responsable: "Pelvis España", descripcion: "Hacer un carnita asada", prioridad: "Maxima"
        }
    ];

    console.log("Lista de tareas");
    console.log(listadoTar)
  return (
    <div>
        <ul>
            {
                listadoTar.map((item, index) => {return <l1 key ={index}> {item.Titulo}</l1>})
            }
        </ul>
    </div>
  )
}
