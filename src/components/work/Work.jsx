import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ProgressiveImage from "react-progressive-graceful-image";
import spinner from "../../assets/images/spinner.svg";
import { GitHub } from "@material-ui/icons";

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
            <Card>
              <ProgressiveImage
                src={props.gif}
                placeholder={spinner}
              >
                {src => <img src={src} alt={`${props.title} usage gif`} />}
              </ProgressiveImage>
            </Card>
            <div className="description">
              <span>{props.description}</span>
              <a href={props.link} target="_blank" rel="noreferrer">
                <GitHub className="gh-icon"/>Visit repo
              </a>
            </div>
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
