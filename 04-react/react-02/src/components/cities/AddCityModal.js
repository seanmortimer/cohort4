import React from 'react';
import Modal from 'react-bootstrap/Modal';

function AddCityModal(props) {
  // const onAdd = () => {
  //   console.log('heyy');
  //   return;
  // };

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
        <h4 className="modal-title"><i className="nc-icon nc-square-pin" />&nbsp; Add a city</h4>
        <button type="button" className="close" onClick={props.onHide}>&times;</button>
      </div>
      <div className="modal-body pt-1">
        {/* <p id="idAddWarning">&nbsp;</p> */}
        {/* <span id="idAddWarning">&nbsp;</span> */}
        <form className="form-group">
          <p>
            <label htmlFor="cityname">
              City name
              <input type="text" name="cityname" className="form-control" placeholder="City name" />
            </label>
          </p>
          <p>
            <label htmlFor="population">Population
              <input type="text" className="form-control" name="population" placeholder="Population" />
            </label>
          </p>
          <p>
            <label htmlFor="latitude">Latitude
              <input type="text" className="form-control" name="latitude" placeholder="Latitude" />
            </label>
          </p>
          <p>
            <label htmlFor="longitude">Longitude
              <input type="text" className="form-control" name="longitude" placeholder="Longitude" />
            </label>
          </p>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger btn-fill" onClick={props.onHide}>Cancel</button>
        <button
          type="button"
          className="btn btn-success btn-fill"
          // onClick={onAdd}
        >
          Add
        </button>
      </div>
    </Modal>
  );
}


export default AddCityModal;
