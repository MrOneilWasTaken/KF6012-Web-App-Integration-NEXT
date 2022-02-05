import { useState } from "react"
import { Modal } from "react-bootstrap"
import Link from 'next/link'


const Paper = ({title, abstract, doi, preview}) => {

  const [show, setShow] = useState(false)



  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)



 

  return(
    <div>
      <button className="papersFlexbox" onClick= {handleShow}>{title}</button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {abstract}
          </div>
          <div>
            <Link href = {doi} passHref>
              <button className="modalCloseButton">
                D.O.I
              </button>
            </Link>
          </div>
          <div>
            
           
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="modalCloseButton" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Paper