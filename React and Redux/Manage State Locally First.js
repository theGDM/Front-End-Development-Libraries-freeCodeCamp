class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  submitMessage(){
    let newMessages = this.state.messages.map(m => m);
    newMessages.push(this.state.input);
    this.setState({
      input : '',
      messages : newMessages
    })
  }

  render() {
    let messageList = this.state.messages.map((m, i) => {
      return (<li key={i}>{m}</li>);
    }); 

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type='text' onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
            {messageList}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
