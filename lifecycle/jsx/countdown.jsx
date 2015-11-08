import React from 'react';


class CountDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    };
  }

  startTimer() {
    let refreshIntervalId = setInterval(() => {
      if (this.state.time == -1) {
        clearInterval(refreshIntervalId);
        React.unmountComponentAtNode(document.getElementById('timer'));
        return;
      }
      this.setState({time: this.state.time - 1});
    }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    alert('Timer says bye bye!');
  }

  shouldComponentUpdate() {
    return(this.state.time > 0);
  }

  render() {
    return (
      <div className="countDownBox">
        <p>{this.state.time}</p>
        <p>{this.state.time == 0 ?  'Time out!' : ''}</p>
      </div>
    );
  }

};

export default CountDown;
