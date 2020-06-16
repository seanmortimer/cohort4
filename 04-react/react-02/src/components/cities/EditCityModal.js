import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class EditCityModal extends Component {
  constructor(props) {
    super(props);
    this.state = { net: '' };
    this.handleEdit = this.handleEdit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // TODO: update net change box on typing
  // handleChange(e) {
  //   console.log('e.target.movedin :>> ', e.target.value);
  //   const movein = Number(e.target.movedin);
  //   const out = Number(e.target.movedout)
  //   console.log('movein :>> ', movein);
  //   console.log('out :>> ', out);
  //   this.setState({ net: (movein - out) });
  // }

  handleEdit(e) {
    e.preventDefault();
    const movein = Number(e.target.movedin?.value);
    const out = Number(e.target.movedout?.value);
    const net = movein - out;
    this.props.onEdit(net);
    this.props.onHide();
  }

  render() {
    const { city } = this.props;
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
          <h4 className="modal-title"><i className="nc-icon nc-square-pin" />&nbsp; Move in or out</h4>
          <button type="button" className="close" onClick={this.props.onHide}>&times;</button>
        </div>
        <div className="modal-body">
          <p className="font-weight-bold">{city.name}</p>
          {/* <span id="idAddWarning">&nbsp;</span> */}
          <form className="form-group" onChange={this.handleChange} onSubmit={this.handleEdit}>
            <p>
              <label htmlFor="currentpopulation">Current population
                <input
                  type="text"
                  name="currentpopulation"
                  className="form-control"
                  placeholder="Current Population"
                  value={city.pop}
                  disabled
                />
              </label>
            </p>
            <p>
              <label htmlFor="movedin">Population moved in
                <input type="text" className="form-control" name="movedin" placeholder="Moved in" />
              </label>
            </p>
            <p>
              <label htmlFor="movedout">Population moved out
                <input type="text" className="form-control" name="movedout" placeholder="Moved out" />
              </label>
            </p>
            <p>
              <label htmlFor="netchange">Net population change
                <input
                  type="text"
                  className="form-control"
                  name="netchange"
                  placeholder="Net change"
                  value={this.state.net}
                  disabled
                />
              </label>
            </p>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-fill" onClick={this.props.onHide}>Cancel</button>
              <button type="submit" className="btn btn-success btn-fill">Update</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
export default EditCityModal;
