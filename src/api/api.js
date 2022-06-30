export const FeedbackAPI = {
  getGuests() {
    return fetch(
      "https://gp-js-test.herokuapp.com/pizza/guests"
    ).then((response) => response.json());
  },
  getDiets() {
    const names = JSON.parse(localStorage.getItem("Partipicants")).map(
      (person) => {
        return encodeURI(person.name);
      }
    );
    return fetch(
      `https://gp-js-test.herokuapp.com/pizza/world-diets-book/${names.join()}`
    ).then((response) => response.json());
  }
};
