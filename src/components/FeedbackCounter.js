import React from 'react';
import './FeedbackCounter.css';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  clickOnBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  clickOnBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div>
          <button type="button" onClick={this.clickOnBtnGood}>
            Good
          </button>
          <button type="button" onClick={this.clickOnBtnNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.clickOnBtnBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>
            Total: {this.state.good + this.state.neutral + this.state.bad}
          </li>
          <li>
            Positive feedback:{' '}
            {(this.state.good /
              (this.state.good + this.state.neutral + this.state.bad)) *
              100}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackCounter;
