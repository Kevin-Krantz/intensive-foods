import React, { Component } from "react";

class Favorite extends Component {
  render() {
    let classes = "fa-star fa-";
    classes += this.props.isFavorite ? "solid" : "regular";

    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onFavor}
        className={classes}
      />
    );
  }
}

export default Favorite;
