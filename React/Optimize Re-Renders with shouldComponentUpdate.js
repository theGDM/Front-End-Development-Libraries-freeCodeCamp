class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
 
  //then 2nd it will be called
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 == 0){
      return true;
    }else{
      return false;
    }
    // Change code above this line
  }

  //this will be called first while receiving props
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...' + nextProps.value);
  }
 
  //if 2nd called lifecycle method returns true
  //then this method will be called
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }

  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
