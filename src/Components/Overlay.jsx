/* eslint-disable react/prop-types */


function Overlay({closeCountryModal}) {

  function closeOverlay(){
    closeCountryModal()
  }

  return (
    <div className="overlay" onClick={()=>closeOverlay()}>
      
    </div>
  )
}
 
export default Overlay
