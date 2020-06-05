import React, { Component } from 'react';
import EditCityModal from './EditCityModal';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
    this.handleEditOpen = this.handleEditOpen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onShowEdit = this.onShowEdit.bind(this);
    this.onHideEdit = this.onHideEdit.bind(this);
    this.handleEditCity = this.handleEditCity.bind(this);
  }

  onShowEdit() {
    this.setState({ showEdit: true });
  }

  onHideEdit() {
    this.setState({ showEdit: false });
  }

  handleEditOpen() {
    // console.log('what you want to edit?');
    this.setState({ showEdit: true });
  }

  handleDelete() {
    this.props.onDelete(this.props.city.key);
  }

  handleEditCity(net) {
    this.props.onEditSubmit(this.props.cityId, net);
  }

  render() {
    const { city } = this.props;
    return (
      <div className="card clCityCard">
        <div className="card-header ">
          <h4 className="card-title">{city.name}</h4>
        </div>
        <div className="card-body clCityCard-body">
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
              onClick={this.handleEditOpen}
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
        <EditCityModal
          show={this.state.showEdit}
          onHide={() => this.onHideEdit()}
          city={city}
          onEdit={this.handleEditCity}
        />
      </div>
    );
  }
}

export default Card;
