import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { GitHub } from '@material-ui/icons';
import ProgressiveImage from "react-progressive-graceful-image";

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
          className="work-modal"
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProgressiveImage
              src={props.gif}
              placeholder={props.placeholder}
              delay={500}
            >
              {src => <img src={src} alt={`${props.title} usage gif`} />}
            </ProgressiveImage>
            <span>{props.description}</span>
            <a href={props.link} target="_blank" rel="noreferrer">
              <GitHub className="gh-icon"/>Visit the repo
            </a>
          </Modal.Body>
          <Modal.Footer>
            <h4>Stacks</h4>
            <div>
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
