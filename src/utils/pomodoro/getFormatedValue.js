/* eslint-disable no-unused-vars */
// on peut avoir un fichier js avec des fonctions utilitaires purement en js
// appelables de à plusierus endroits...
// si des éléments react (comme useState) sont nécessaires, on aura un Hook perso


//Permet d'avoir pour 305 secondes => 05:05 et non 5:5
export default function getFormatedValue(time) {
  const minutes = `${
    Math.trunc(time / 60) < 10
      ? `0${Math.trunc(time / 60)}`
      : `${Math.trunc(time / 60)}`
  }`;

  const seconds = `${
    Math.trunc(time % 60) < 10
      ? `0${Math.trunc(time % 60)}`
      : `${Math.trunc(time % 60)}`
  }`;

  return `${minutes}:${seconds}`
}
