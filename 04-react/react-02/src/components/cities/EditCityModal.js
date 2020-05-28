import React from 'react';
import Modal from 'react-bootstrap/Modal';

function EditCityModal(props) {
  return (
    <Modal
      // May 27 - animation false avoids a console error caused from a react-bootsrap dependency
      animation={false}
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      onHide={props.onHide}
      size="sm"
      centered
    >
      <div className="modal-header pt-0 mb-2">
        <h4 className="modal-title"><i className="nc-icon nc-square-pin" />&nbsp; Move in or out</h4>
        <button type="button" className="close" onClick={props.onHide}>&times;</button>
      </div>
      <div className="modal-body">
        <p className="font-weight-bold">City nameXX</p>
        {/* <span id="idAddWarning">&nbsp;</span> */}
        <form className="form-group">
          <p>
            <label htmlFor="currentpopulation">Current population
              <input
                type="text"
                name="currentpopulation"
                className="form-control"
                placeholder="Current Population"
                value="1,000,000"
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
              <input type="text" className="form-control" name="netchange" placeholder="Net change" disabled />
            </label>
          </p>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger btn-fill" onClick={props.onHide}>Cancel</button>
        <button
          type="button"
          className="btn btn-success btn-fill"
          data-dismiss="modal"
          action="addCity"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}

export default EditCityModal;
