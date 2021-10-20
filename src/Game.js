import React from "react";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPlayer: "O",

      button1: "",
      button2: "",
      button3: "",
      button4: "",
      button5: "",
      button6: "",
      button7: "",
      button8: "",
      button9: "",

      someoneWon: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.checkForTie = this.checkForTie.bind(this);

    this.isTied = false;

    this.someoneWon = false;

    this.winner = "";

    this.lastButton = "";

    this.button1 = false;
    this.button2 = false;
    this.button3 = false;
    this.button4 = false;
    this.button5 = false;
    this.button6 = false;
    this.button7 = false;
    this.button8 = false;
    this.button9 = false;
  }

  playerFlipper() {
    if (this.state.lastPlayer === "O") {
      this.setState({ lastPlayer: "X" });
      return "X";
    }

    if (this.state.lastPlayer === "X") {
      this.setState({ lastPlayer: "O" });
      return "O";
    }
  }

  checkForWinner(lastButton) {
    if (
      (this.state.button1 === "X" || lastButton === "button1") &&
      (this.state.button2 === "X" || lastButton === "button2") &&
      (this.state.button3 === "X" || lastButton === "button3")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button4 === "X" || lastButton === "button4") &&
      (this.state.button5 === "X" || lastButton === "button5") &&
      (this.state.button6 === "X" || lastButton === "button6")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button7 === "X" || lastButton === "button7") &&
      (this.state.button8 === "X" || lastButton === "button8") &&
      (this.state.button9 === "X" || lastButton === "button9")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button1 === "X" || lastButton === "button1") &&
      (this.state.button4 === "X" || lastButton === "button4") &&
      (this.state.button7 === "X" || lastButton === "button7")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button2 === "X" || lastButton === "button2") &&
      (this.state.button5 === "X" || lastButton === "button5") &&
      (this.state.button8 === "X" || lastButton === "button8")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button3 === "X" || lastButton === "button3") &&
      (this.state.button6 === "X" || lastButton === "button6") &&
      (this.state.button9 === "X" || lastButton === "button9")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button1 === "X" || lastButton === "button1") &&
      (this.state.button5 === "X" || lastButton === "button5") &&
      (this.state.button9 === "X" || lastButton === "button9")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button3 === "X" || lastButton === "button3") &&
      (this.state.button5 === "X" || lastButton === "button5") &&
      (this.state.button7 === "X" || lastButton === "button7")
    ) {
      this.winner = "Player 1";
    } else if (
      (this.state.button1 === "O" || lastButton === "button1") &&
      (this.state.button2 === "O" || lastButton === "button2") &&
      (this.state.button3 === "O" || lastButton === "button3")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button4 === "O" || lastButton === "button4") &&
      (this.state.button5 === "O" || lastButton === "button5") &&
      (this.state.button6 === "O" || lastButton === "button6")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button7 === "O" || lastButton === "button7") &&
      (this.state.button8 === "O" || lastButton === "button8") &&
      (this.state.button9 === "O" || lastButton === "button9")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button1 === "O" || lastButton === "button1") &&
      (this.state.button4 === "O" || lastButton === "button4") &&
      (this.state.button7 === "O" || lastButton === "button7")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button2 === "O" || lastButton === "button2") &&
      (this.state.button5 === "O" || lastButton === "button5") &&
      (this.state.button8 === "O" || lastButton === "button8")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button3 === "O" || lastButton === "button3") &&
      (this.state.button6 === "O" || lastButton === "button6") &&
      (this.state.button9 === "O" || lastButton === "button9")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button1 === "O" || lastButton === "button1") &&
      (this.state.button5 === "O" || lastButton === "button5") &&
      (this.state.button9 === "O" || lastButton === "button9")
    ) {
      this.winner = "Player 2";
    } else if (
      (this.state.button3 === "O" || lastButton === "button3") &&
      (this.state.button5 === "O" || lastButton === "button5") &&
      (this.state.button7 === "O" || lastButton === "button7")
    ) {
      this.winner = "Player 2";
    }

    if (this.winner !== "") {
      this.setState({ someoneWon: true });
    }
  }

  checkForTie(lastButton) {
    if (this.state.button1 !== "" || lastButton === "button1") {
      this.button1 = true;
    }
    if (this.state.button2 !== "" || lastButton === "button2") {
      this.button2 = true;
    }
    if (this.state.button3 !== "" || lastButton === "button3") {
      this.button3 = true;
    }
    if (this.state.button4 !== "" || lastButton === "button4") {
      this.button4 = true;
    }
    if (this.state.button5 !== "" || lastButton === "button5") {
      this.button5 = true;
    }
    if (this.state.button6 !== "" || lastButton === "button6") {
      this.button6 = true;
    }
    if (this.state.button7 !== "" || lastButton === "button7") {
      this.button7 = true;
    }
    if (this.state.button8 !== "" || lastButton === "button8") {
      this.button8 = true;
    }
    if (this.state.button9 !== "" || lastButton === "button9") {
      this.button9 = true;
    }

    if (
      this.button1 === true &&
      this.button2 === true &&
      this.button3 === true &&
      this.button4 === true &&
      this.button5 === true &&
      this.button6 === true &&
      this.button7 === true &&
      this.button8 === true &&
      this.button9 === true
    ) {
      this.isTied = true;
    }
  }

  handleClick(e) {
    let eventID = e.target.id;
    let eventText = e.target.innerHTML;

    if (eventText !== "X" && eventText !== "O") {
      if (eventID === "button1") {
        this.setState({ button1: this.playerFlipper() });
        this.lastButton = "button1";
      }
      if (eventID === "button2") {
        this.setState({ button2: this.playerFlipper() });
        this.lastButton = "button2";
      }
      if (eventID === "button3") {
        this.setState({ button3: this.playerFlipper() });
        this.lastButton = "button3";
      }
      if (eventID === "button4") {
        this.setState({ button4: this.playerFlipper() });
        this.lastButton = "button4";
      }
      if (eventID === "button5") {
        this.setState({ button5: this.playerFlipper() });
        this.lastButton = "button5";
      }
      if (eventID === "button6") {
        this.setState({ button6: this.playerFlipper() });
        this.lastButton = "button6";
      }
      if (eventID === "button7") {
        this.setState({ button7: this.playerFlipper() });
        this.lastButton = "button7";
      }
      if (eventID === "button8") {
        this.setState({ button8: this.playerFlipper() });
        this.lastButton = "button8";
      }
      if (eventID === "button9") {
        this.setState({ button9: this.playerFlipper() });
        this.lastButton = "button9";
      }
    }
    this.checkForWinner(this.lastButton);
    this.checkForTie(this.lastButton);
    this.forceUpdate();
  }

  render() {
    let tie = this.isTied ? "You tied!" : "";
    let win = this.state.someoneWon ? this.winner + " wins!" : "";
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={this.handleClick} id="button1">
                  {this.state.button1}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button2">
                  {this.state.button2}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button3">
                  {this.state.button3}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} id="button4">
                  {this.state.button4}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button5">
                  {this.state.button5}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button6">
                  {this.state.button6}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleClick} id="button7">
                  {this.state.button7}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button8">
                  {this.state.button8}
                </button>
              </td>
              <td>
                <button onClick={this.handleClick} id="button9">
                  {this.state.button9}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          {tie}
          {win}
        </div>
      </>
    );
  }
}

export default Game;
