import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import React from "react";

export const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (data) => {
    props.person.phone = data.phone;
    props.person.comment = data.comment;
    props.person.haveFeedback = true;
    props.person.rating = data.rating;

    const guests = [];

    for (let i = 0; i < props.guests.length; i++) {
      if (props.guests[i].name === props.person.name) {
        props.guests[i] = props.person;
      }
      guests.push(props.guests[i]);
      localStorage.setItem("Diets", JSON.stringify(guests));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Feedback</h2>
      <div className={styles.person}>
        Name: <div>{props.person.name}</div>
      </div>

      <div className={styles.ratingArea}>
        <input
          {...register("rating")}
          type="radio"
          id="star-5"
          name="rating"
          value="5"
        />
        <label htmlFor="star-5"></label>
        <input
          {...register("rating")}
          type="radio"
          id="star-4"
          name="rating"
          value="4"
        />
        <label htmlFor="star-4"></label>
        <input
          {...register("rating")}
          type="radio"
          id="star-3"
          checked
          name="rating"
          value="3"
        />
        <label htmlFor="star-3"></label>
        <input
          {...register("rating")}
          type="radio"
          id="star-2"
          name="rating"
          value="2"
        />
        <label htmlFor="star-2"></label>
        <input
          {...register("rating")}
          type="radio"
          id="star-1"
          name="rating"
          value="1"
        />
        <label htmlFor="star-1"></label>
      </div>

      <input
        className={styles.phone}
        type="tel"
        placeholder="Phone"
        {...register("phone", {
          required: true,
          pattern: /^(\+?375\s?|8-?0)\s?\((29|25|44|33|17)\)\s[1-9]\d{2}(\s\d{2}){2}$/
        })}
      />
      {errors.phone && (
        <span className={styles.error}>
          This field is required. <br></br>For example: <br></br> +375 (**) 111
          111 11 <br></br>or<br></br> 80(**) 111 11 11{" "}
        </span>
      )}

      <textarea
        className={styles.comment}
        placeholder="Comment"
        {...register("comment")}
      />

      <input
        onClick={errors.phone ? props.cancelFeedback : props.saveFeedback}
        className={styles.btn}
        type="submit"
        value={errors.phone ? "Cancel" : "Save"}
      />
    </form>
  );
};
