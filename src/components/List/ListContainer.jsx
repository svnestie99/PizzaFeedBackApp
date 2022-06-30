import React from "react";
import { FeedbackAPI } from "../../api/api";
import { FormContainerComponent } from "../Form/FormContainer";
import { List } from "./List";

export class ListContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partipicants: null,
      diets: null,
      isClicked: false,
      guest: {}
    };
  }
  componentDidMount() {
    if (
      localStorage.getItem("Partipicants") === null &&
      localStorage.getItem("Diets") === null
    ) {
      FeedbackAPI.getGuests()
        .then((data) => {
          localStorage.setItem("Partipicants", JSON.stringify(data.party));
          this.setState({
            partipicants: JSON.parse(localStorage.getItem("Partipicants"))
          });
        })
        .then(() => {
          FeedbackAPI.getDiets().then((data) => {
            const guests = JSON.parse(localStorage.getItem("Partipicants"));
            for (let i = 0; i < guests.length; i++) {
              for (let i = 0; i < data.diet.length; i++) {
                if (guests[i].name === data.diet[i].name) {
                  guests[i].isVegan = data.diet[i].isVegan;
                }
              }
            }
            localStorage.setItem("Diets", JSON.stringify(guests));
            this.setState({ diets: JSON.parse(localStorage.getItem("Diets")) });
          });
        });
    }
  }
  getFeedback = (guest) => {
    localStorage.setItem("Guest", JSON.stringify(guest));
    this.setState({ isClicked: true, guest: guest });
  };
  clearList = () => {
    localStorage.clear();
    this.componentDidMount();
  };

  render() {
    if (this.state.isClicked) {
      return (
        <FormContainerComponent state={this.state} guest={this.state.guest} />
      );
    } else {
      return <List clearList={this.clearList} getFeedback={this.getFeedback} />;
    }
  }
}
