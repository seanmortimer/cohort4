import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    console.log('what you want to edit?');
    // this.props.modal();
  }

  handleDelete() {
    this.props.onDelete(this.props.city.key);
  }

  render() {
    const { city } = this.props;
    return (
      <div className="card ">
        <div className="card-header ">
          <h4 className="card-title">{city.name}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-7 pr-0 font-weight-bold text-nowrap">
              <div>Population:</div>
              <div>Classification:</div>
              <div>Hemisphere:</div>
              <div>Latitude:</div>
              <div>Longitude:</div>
            </div>
            <div className="col-5 pl-0 text-right text-nowrap">
              <div>{city.pop.toLocaleString()}</div>
              <div>{city.howBig()}</div>
              <div>{city.whichSphere()}</div>
              <div>{city.lat}</div>
              <div>{city.long}</div>
            </div>
          </div>
          <hr />
          <div className="text-right">
            <button
              type="button"
              className="btn btn-sm mr-1"
              onClick={this.handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger btn-fill btn-sm"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
