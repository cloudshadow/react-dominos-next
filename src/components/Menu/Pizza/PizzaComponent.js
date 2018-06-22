import React from 'react';
import PropTypes from 'prop-types';
import PizzaDialogComponent from '../../Shared/PizzaDialog/PizzaDialogComponent';
import './pizza.scss';

export default class PizzaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.state = {
    //   currentPizza: null
    // };
    // this.handlePizzaDiy = this.handlePizzaDiy.bind(this);
  }

  // componentWillMount() {

  // }
  componentDidMount() {
    this.props.getPizzaMenu();
    this.props.getPizzaOptions();
  }

  handlePizzaDiy(pizzaId) {
    // this.setState({ currentPizza: pizza });
    this.props.getPizzaDetail(pizzaId);
    this.props.controlPizzaDialog();
  }

  renderPizzaList() {
    return (
      <div>
        {
          this.props.menuState.pizzaMenu.map(pizzaList => {
            return (
              <div key={pizzaList.category} className="row">
                <div className="col-12 category-name">
                  {pizzaList.category}
                </div>
                {
                  pizzaList.list.map(pizza => {
                    return (
                      <div key={pizza.id} className="col-3">
                        <div className="card pizza-box">
                          <img className="card-img-top" src={pizza.image} />
                          <div className="card-body">
                            <h5 className="card-title">{pizza.name}</h5>
                            <div className="card-text promo-text">{pizza.promotionInfo ? <span>{pizza.promotionInfo}</span> : ''}</div>
                            <div className="card-text">9'' ￥{pizza.nineInchOriginPrice}</div>
                            <div className="card-text">12'' ￥{pizza.twelveInchOriginPrice}</div>
                            <button className="btn btn-primary btn-cart" onClick={this.handlePizzaDiy.bind(this, pizza.id)}>Option</button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid pizza-container">
        {
          this.props.menuState.pizzaMenu && this.props.menuState.pizzaOptions ? this.renderPizzaList() : ''
        }
        {
          this.props.menuState.pizzaDetail && this.props.menuState.pizzaOptions && this.props.menuState.showPizzaDialog ?
            <PizzaDialogComponent
              pizzaOptions={this.props.menuState.pizzaOptions}
              pizza={this.props.menuState.pizzaDetail}
              controlPizzaDialog={this.props.controlPizzaDialog}
            />
            : ''
        }

      </div>
    );
  }
}

PizzaComponent.propTypes = {
  menuState: PropTypes.object.isRequired,
  getPizzaMenu: PropTypes.func.isRequired,
  getPizzaOptions: PropTypes.func.isRequired,
  getPizzaDetail: PropTypes.func.isRequired,
  controlPizzaDialog: PropTypes.func.isRequired,
};