import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { GitHub } from '@material-ui/icons';

export default function Work(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="work" onClick={handleShow}>
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
      </div>

        <Modal 
          show={show} 
          onHide={handleClose} 
          className="workModal"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <img src={props.gif} alt={`${props.title} usage gif`} />
            <span>{props.description}</span>
            <a href={props.link} target="_blank" rel="noreferrer">
              <GitHub/> Visit the repo
            </a>
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <h4>Stacks</h4>
            <div className="stackList">
              {Object.values(props.stacks).map(stack => {
                return (
                  <img key={stack} src={stack} alt="stack logo" />
                )
              })}
            </div>
          </Modal.Footer>
      </Modal>
    </>
  )
}
