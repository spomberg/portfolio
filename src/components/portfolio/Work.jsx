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

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description}
          <a href={props.link} target="_blank" rel="noreferrer">
            <GitHub/> Visit GitHub repo
          </a>
          <img src={props.gif} alt={`${props.title} usage gif`} />
        </Modal.Body>
        <Modal.Footer>
          <h4>Stacks</h4>
          <ul className="stackList">
            {Object.values(props.stacks).map(stack => {
              return (
                <li>
                  <img src={stack} alt="stack logo" />
                </li>
              )
            })}
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  )
}
