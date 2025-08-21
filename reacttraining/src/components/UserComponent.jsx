import React from "react";

class UserComponent extends React.Component {
  // 1. Constructor: Initialize state and bind methods
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being constructed");
  }

/** getDerivedStateFromProps is a static lifecycle method in React class components. It is called right before rendering, both on the initial mount and on updates. Its main purpose is to update the state based on changes in props.

It receives nextProps and prevState as arguments.
It should return an object to update the state, or null to indicate no state update is needed.
It is rarely used, but can be helpful if you need to keep the state in sync with props.
Example use case: If a prop changes and you want to update the state accordingly.

In your code, it currently just logs a message and returns null, meaning it does not update the state. */

  // 2. static getDerivedStateFromProps: Sync state to props (rarely used)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Syncing state to props if needed");
    // Return null to indicate no change to state.
    return null;
  }

  // 3. componentDidMount: Invoked once after initial render
  componentDidMount() {
    console.log("componentDidMount: Component mounted to DOM");
    // Example: Fetch data here
    this.timer = setInterval(() => {
      console.log("Timer running: count is", this.state.count);
    }, 2000);
  }

  // 4. shouldComponentUpdate: Decide if re-render is needed
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should component update?");
    // Only update if count is less than 5
    if (nextState.count >= 5) {
      console.log("Count reached limit, not updating");
      return false;
    }
    return true;
  }

  // 5. getSnapshotBeforeUpdate: Capture info before DOM changes
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Before DOM updates");
    // Return value will be passed to componentDidUpdate
    return null;
  }

  // 6. componentDidUpdate: Invoked after update occurs
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated");
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  // 7. componentWillUnmount: Cleanup before component is removed
  componentWillUnmount() {
    console.log("componentWillUnmount: Component will unmount");
    // Example: Remove event listeners, cancel timers
    if (this.timer) {
      clearInterval(this.timer);
      console.log("Timer cleared");
    }
  }

  // Example method to update state
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Render method: Renders UI
  render() {
    console.log("Render: Rendering component");
    return (
      <div>
        <h2>UserComponent Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default UserComponent;