import styles from "./List.module.css";

export const List = (props) => {
  let listElement;

  if (JSON.parse(localStorage.getItem("Diets")) !== null) {
    listElement = JSON.parse(localStorage.getItem("Diets")).map(
      (person, id) => {
        return (
          <div
            key={id}
            onClick={() =>
              person.eatsPizza ? props.getFeedback(person) : null
            }
            className={person.eatsPizza ? styles.pizzaEater : styles.guest}
          >
            <div
              className={
                person.isVegan && person.eatsPizza ? styles.vegan : null
              }
            >
              {person.haveFeedback ? <span>&#10004;</span> : null} {person.name}
            </div>
          </div>
        );
      }
    );
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.listContainer}>
      <button onClick={props.clearList}>Clear list</button>
      <div className={styles.list}>{listElement}</div>
    </div>
  );
};
