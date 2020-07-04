import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class AddCityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addBtn: true,
      name: '',
      pop: '',
      lat: '',
      long: '',
    };
    // this.addBtn = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testHandleChange = this.testHandleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, pop, lat, long } = this.state;

    this.props.onAdd({
      name,
      pop: Number(pop),
      lat: Number(lat),
      long: Number(long),
    });

    this.setState({
      addBtn: true,
      name: '',
      pop: '',
      lat: '',
      long: '',
    });

    this.props.onHide();
  }

  testHandleChange(e) {
    // TODO - INPUT VALIDATION
    const localState = { ...this.state };
    localState[e.target.name] = e.target.value;
    let { name, pop, lat, long } = localState;

    pop = Number(pop);
    lat = Number(lat);
    long = Number(long);

    // console.log('this.state.warn :>> ', this.state.warn);


    if (lat < -90 || lat > 90 || isNaN(lat)) {
      localState.warn = 'Latitude must be between -90 and +90 degrees.';
    } else if (long < -180 || long > 180 || isNaN(long)) {
      localState.warn = 'Longitude must be between -180 and +180 degrees.';
    } else {
      localState.warn = '';
      if (name && pop && lat && long) localState.addBtn = false;
    }

    this.setState(localState);
  }

  render() {
    return (
      <Modal
        // May 27 - animation false avoids a console error caused from a react-bootsrap dependency
        animation={false}
        show={this.props.show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={this.props.onHide}
        size="sm"
        centered
      >
        <div className="modal-header pt-0 mb-2">
          <h4 className="modal-title">
            <i className="nc-icon nc-square-pin" />
            &nbsp; Add a city
          </h4>
          <button type="button" className="close" onClick={this.props.onHide}>&times;</button>
        </div>
        <div className="modal-body pt-1">
          <form
            className="form-group"
            ref={(frm) => { this.frm = frm; }}
            autoComplete="off"
            onSubmit={this.handleSubmit}
            onChange={this.testHandleChange}
          >
            <p>
              <label htmlFor="name">
                City name
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="City name"
                  defaultValue=""
                />
              </label>
            </p>
            <p>
              <label htmlFor="pop">Population
                <input type="text" className="form-control" name="pop" placeholder="Population" />
              </label>
            </p>
            <p>
              <label htmlFor="lat">Latitude
                <input type="text" className="form-control" name="lat" placeholder="Latitude" />
              </label>
            </p>
            <p>
              <label htmlFor="long">Longitude
                <input type="text" className="form-control" name="long" placeholder="Longitude" />
              </label>
            </p>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-fill"
                onClick={this.props.onHide}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success btn-fill"
                // onClick={this.handleSubmit}
                disabled={this.state.addBtn}
              // onSubmit={this.handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
          <p id="idAddWarning">{this.state.warn || ' '}</p>
        </div>
      </Modal>
    );
  }
}


export default AddCityModal;
