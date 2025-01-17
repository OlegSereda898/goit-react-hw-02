import css from "./Options.module.css";

const Options = ({
  options,
  onLeaveFeedback,
  onResetFeedback,
  hasFeedback,
}) => {
  return (
    <div className={css.options}>
      {Object.keys(options).map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {hasFeedback && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
