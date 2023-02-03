import PT from 'prop-types';

import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(e => {
    return (
      <button
        className={css.btn}
        type="button"
        key={e}
        onClick={() => {
          onLeaveFeedback(e);
        }}
      >
        {e}
      </button>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propsType = {
  options: PT.array.isRequired,
  onLeaveFeedback: PT.func.isRequired,
};
