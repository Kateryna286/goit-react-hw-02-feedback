import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import './FeedbackCounter.css';
//import PropTypes from 'prop-types';

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Options = Object.keys(this.state);

  onBtnClick = label => {
    return this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = () => {
    const Total = this.state.good + this.state.neutral + this.state.bad;
    return Total;
  };

  countPositiveFeedbackPercentage = () => {
    const Total = this.countTotalFeedback();
    const Percentage = (this.state.good / Total) * 100;
    return Math.round(Percentage);
  };

  render() {
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            option={this.Options}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good !== 0 ||
          this.state.neutral !== 0 ||
          this.state.bad !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackCounter;
