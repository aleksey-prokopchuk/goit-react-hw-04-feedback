import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, handleAddVote }) => {
  //   console.log(props);
  // const { state, handleAddVote } = props;
  return (
    <div className={css.wraper_btn}>
      {option.map((opt, index, arr) => {
        return  (
        <button
          key={index}
          type="button"
          className={css.btn}
          onClick={(event) => handleAddVote(event)}
        >
          {opt}
        </button>
      )})}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAddVote: PropTypes.func.isRequired,
};
