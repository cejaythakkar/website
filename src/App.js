import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionType from './store/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  
  incrementCounterHandler = ( event ) => {
    this.setState({
      counter : this.state.counter + 1
    });
  }

  decrementCounterHandler = () => {
    this.setState({
      counter : this.state.counter - 1
    });
  }

  addTotheCounterHandler = () => {
    this.setState({
      counter : this.state.counter + 5
    })
  }

  subtractToTheCounterHandler = () => {
    this.setState({
      counter : this.state.counter - 5
    })
  }

  resetCounter = () => {
    this.setState({
      counter : 0
    })
  }

  render() {
    return (
      <div className="App">
      <Link to="/about">
        <button>Go to About</button>
      </Link>
       <h1>this is a redux tutorial</h1>
       <div className="counter-wrapper">
          <div className="counter-display-wrapper">
            <h1>Current Counter : {this.props.ctr}</h1>
          </div>
          <div className="counter-control-buttons-wrapper">
            <button onClick={this.props.onIncrementCounter}>Increment</button>
            <button onClick={this.props.onDecrementCounter}>Decrement</button>
            <button onClick={this.props.onAddCounter}>Add 10</button>
            <button onClick={this.props.onSubtractCounter}>Subtract 10</button>
            <button onClick={this.props.onReset}>Reset</button>
          </div>
          <div className="counter-result-container">
            <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
            <ul>
              {
                this.props.storedResults.map(element => {
                  return <li key={element.id} onClick={() => {this.props.onDeleteResult(element.id)}}>{element.value}</li>
                })  
              }
            </ul>
          </div>
       </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({
      type: actionType.INCREMENT
    }),
    onDecrementCounter : () => dispatch({
      type : actionType.DECREMENT
    }),
    onAddCounter : () => dispatch({
      type : actionType.ADD,
      value : 10
    }),
    onSubtractCounter : () => dispatch({
      type : actionType.SUBTRACT,
      value : 10
    }),
    onReset : () => dispatch({
      type : actionType.RESET
    }),
    onStoreResult : (counterValue) => dispatch({
      type : actionType.STORE_RESULT,
      value : counterValue
    }),
    onDeleteResult : (id) => dispatch({
      type : actionType.DELETE_RESULT,
      resultId : id
    })
  }
};

const mapStateToProps = state =>  {
  return {
    ctr : state.ctr.counter,
    storedResults : state.result.results
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);

