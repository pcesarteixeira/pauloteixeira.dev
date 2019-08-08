import React, { useState, useEffect } from 'react'

export default function ImageCover(props) {
  const { src, srcSet, caption } = props
  const [id, setId] = useState(null)

  useEffect(() => {
    setId(`image-${Math.floor(Math.random() * 2000)}`)
  }, [])

  useEffect(() => {
    if (id === null) return
    addLegend()
    positioningElement()
  }, [id])

  function addLegend() {
    const referenceNode = document.querySelector(`#${id}`)
    const newNode = document.createElement('div')
    newNode.innerHTML = caption
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  }

  function positioningElement() {
    const element = document.querySelector(`#${id}`).parentElement
    element.style.padding = 0
    element.style.margin = 0
    element.style.width = "100%"
    element.style.maxWidth = "100%"
  }

  return <img id={id} alt={caption} className="full-image" src={src} srcSet={srcSet} />
}