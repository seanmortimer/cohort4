import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { city } = this.props;
    // console.log('city :>> ', city);
    return (
      <div className="card ">
        <div className="card-header ">
          <h4 className="card-title">Calgary</h4>
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
              <div>City</div>
              <div>Northern</div>
              <div>55.28</div>
              <div>120.22</div>
            </div>
          </div>
          <hr />
          <div className="text-right">
            <button
              type="button"
              className="btn btn-sm"
              action="edit"
            >
              Edit
            </button>
            <button type="button" className="btn btn-danger btn-fill btn-sm" action="delete">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
