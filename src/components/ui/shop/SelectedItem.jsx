import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import productsData from "../../../data/productsData.json"

export default function SelectedItem() {

  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({})

  useEffect(() => {
    const product = productsData.products.find((product) => product.id === parseInt(id));
    setCurrentProduct(product);
  }, [id])





  return (
    <>

    </>
  )
}
