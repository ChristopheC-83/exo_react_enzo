/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { createPortal } from "react-dom"
import CountryModal from "./CountryModal"
import Overlay from "../../Components/Overlay"

function ListCard({country}) {

    const [showCountryModal, setShowCountryModal] = useState(false)

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      const showModal = () =>{
        setShowCountryModal(!showCountryModal)
    }

    function countryClick(){
        showModal()
        handleScrollToTop()
    }

  return (
    <>
    <li className="listCard" onClick={()=>setShowCountryModal(!showCountryModal)}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
    </li>
    {showCountryModal && createPortal(<CountryModal
    country={country}
    closeModal={()=>setShowCountryModal(!showCountryModal)}
    />, document.body)}
    {showCountryModal && <Overlay closeCountryModal={()=>setShowCountryModal(false)}/>}
    </>
  )
}

export default ListCard
