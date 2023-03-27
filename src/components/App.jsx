import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from 'GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnClick = event => {
    const value = event.target.value;

    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (total, prevState) => total + prevState,
      0
    );

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce(
          (total, feedback) => total + feedback,
          0
        )) *
        100
    );
  render() {
    const { positive, neutral, negative } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ positive, neutral, negative })}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              positive={positive}
              neutral={neutral}
              negative={negative}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
