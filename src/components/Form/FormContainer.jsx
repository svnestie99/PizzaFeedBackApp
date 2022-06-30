import React from "react";
import { Feedback } from "./Feedback";
import { ListContainerComponent } from "../List/ListContainer";
import { Form } from "./Form";

export class FormContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isSaved: false,
      guests: JSON.parse(localStorage.getItem("Diets"))
    };
  }

  cancelFeedback = () => {
    this.setState({ isClicked: true });
  };
  saveFeedback = () => {
    this.setState({ isClicked: false });
    setTimeout(() => {
      this.setState({ isClicked: true });
    }, 100);
  };

  deleteFeedback = (guest) => {
    guest = {
      name: guest.name,
      isVegan: guest.isVegan,
      eatsPizza: guest.eatsPizza
    };

    const guests = [];
    this.setState({ isClicked: true });
    for (let i = 0; i < this.state.guests.length; i++) {
      if (this.state.guests[i].name === guest.name) {
        this.state.guests[i] = guest;
      }
      guests.push(this.state.guests[i]);
      localStorage.setItem("Diets", JSON.stringify(guests));
    }
  };
  render() {
    if (this.state.isClicked) {
      return <ListContainerComponent />;
    } else if (this.props.guest.haveFeedback === true) {
      return (
        <Feedback
          deleteFeedback={this.deleteFeedback}
          person={this.props.guest}
        />
      );
    } else {
      return (
        <Form
          cancelFeedback={this.cancelFeedback}
          guests={this.state.guests}
          saveFeedback={this.saveFeedback}
          person={JSON.parse(localStorage.getItem("Guest"))}
        />
      );
    }
  }
}
