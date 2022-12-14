import React from 'react'
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {



  const { id } = useParams();
  const [odontologo, setOdontologo] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        {
          setOdontologo(res.data)
        }
      })
      .catch(err => console.log(err))
  }, [id])
  {/* aqui deberan renderizar la informacion en detalle de un user en especifico */ }
  {/* Deberan mostrar el name - email - phone - website por cada user en especifico */ }

  return (
    <>
      {odontologo ? (
        <table className='table'>
          <tbody>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th>
                Website
              </th>
            </tr>

            <tr>
              <td> {odontologo.name} </td>
              <td>{odontologo.email}  </td>
              <td> {odontologo.phone}  </td>
              <td> {odontologo.website} </td>
            </tr>
          </tbody>

        </table>
      ) : null}
    </>
  )
}

export default Detail