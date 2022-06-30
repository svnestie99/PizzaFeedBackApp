import styles from "./Feedback.module.css";

export const Feedback = (props) => {
  let ratingElement;
  switch (+props.person.rating) {
    case 1:
      ratingElement = (
        <div className={styles.ratingArea}>
          <input disabled type="radio" name="rating" />
          <label></label>
        </div>
      );
      break;
    case 2:
      ratingElement = (
        <div className={styles.ratingArea}>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
        </div>
      );
      break;
    case 3:
      ratingElement = (
        <div className={styles.ratingArea}>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
        </div>
      );
      break;
    case 4:
      ratingElement = (
        <div className={styles.ratingArea}>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
        </div>
      );
      break;
    case 5:
      ratingElement = (
        <div className={styles.ratingArea}>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
          <input disabled type="radio" name="rating" />
          <label></label>
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <div className={styles.feedback}>
      <h2>Feedback</h2>
      <div className={styles.person}>
        Name: <div>{props.person.name}</div>
      </div>
      {ratingElement}
      <div className={styles.phone}>
        Phone: <div>{props.person.phone}</div>
      </div>
      <div className={styles.commentIsReady}>
        Comment: <div>{props.person.comment}</div>
      </div>
      <button
        onClick={() => {
          props.deleteFeedback(props.person);
        }}
        className={styles.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};
