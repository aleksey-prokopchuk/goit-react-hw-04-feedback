import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';

export default function Feedback({title}) {
  const [goodState, setGoodState] = useState(0);
  const [neutralState, setNeutralState] = useState(0);
  const [badState, setBadState] = useState(0);

  const handleAddVote = (event) => {
    switch (event.target.textContent) {
      case 'good':
        setGoodState((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutralState((prevState) => prevState + 1);
        break;
      case 'bad':
        setBadState((prevState) => prevState + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    return [goodState + neutralState + badState].reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodState / countTotalFeedback()) * 100);
  };

  const strP = ['good', 'neutral', 'bad'];
  
  return (
    <section>
      <h1>{title}</h1>

      <FeedbackOptions
        option={strP}
        handleAddVote={handleAddVote}
      />

      <>
        {!countTotalFeedback() ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={goodState}
            neutral={neutralState}
            bad={badState}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </>
    </section>
    );
};
