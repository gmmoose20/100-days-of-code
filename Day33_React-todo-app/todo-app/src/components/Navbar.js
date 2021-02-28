import React, { Component } from 'react';

export class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: ""
    }
  }

  setContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  addTodo = (e) => {
    if (this.state.content !== "") {
      this.props.addTodo(this.state.content);

      this.setState({
        content: ""
      })
    }
  }
  render() {
    return (
      <div>
        <header style={css.header}>
          <h1 style={css.title}>Todo<span style={css.light}>App</span></h1>
        </header>

        <div style={css.inputBar}>
          <input style={css.input} type="text" placeholder="Add todo..." value={this.state.content} onChange={this.setContent}/>
          <button style={css.addBtn} onClick={this.addTodo}>ADD</button>
        </div>
      </div>
    )
  }
}

const css = {
  header: {
    backgroundColor: "#171717",
    padding: "1em"
  },
  title: {
    color: "#16aa9e",
    fontSize: "2.8em",
    textAlign: "center",
    textTransform: "uppercase"
  },
  light: {
    color: "#f3f3f3",
    fontWeight: "300"
  },
  inputBar: {
    display: "flex",
    height: "3.5em"
  },
  input: {
    flex: "10",
    padding: "0",
    margin: "0",
    fontSize: "1.8em",
    border: "none",
    borderBottom: "3px solid #16aa9e",
    textIndent: "0.5em"
  },
  addBtn: {
     flex: "2",
     fontSize: "1.5em",
     backgroundColor: "#16aa9e",
     border: "none",
     outline: "none",
     cursor: "pointer"
  }
}

export default Navbar;
