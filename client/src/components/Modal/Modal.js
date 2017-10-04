import React from 'react';
import { Button, Modal } from 'react-bootstrap';


class Example extends React.Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() { 
    return (
      <div>
        <p>Select your Meal Preference Here!</p>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Set Preference
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Choose One</h4>
            <label className="radio-inline"><input type="radio" name="optradio" />Vegan</label>
            <label className="radio-inline"><input type="radio" name="optradio" />Vegaterian</label>
            <label className="radio-inline"><input type="radio" name="optradio" />Chicken</label>


            <h4>Popover in a modal</h4>
            

            <hr />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }  
}

export default Example;