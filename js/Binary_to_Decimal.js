class App extends React.Component{
	constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state={
      	value:'',
      }
  	}

  	setData(result){
		this.setState({value: result})
		console.log(result)
	}

	handleChange(event) {
    this.setState({value: event.target.value});
  }

	handleSubmit(event){
		const binary = this.state.value
		console.log('entered value:' + binary);
		const digit = parseInt(binary, 2);
		alert("Result is" + " " + digit);
		event.preventDefault();
	}

	render(){
		const jsx=(
			<div>
				<div>
					<form onSubmit={this.handleSubmit} id="form">
						<input type="number" value={this.state.value} onChange={this.handleChange} maxLength="8" id="binNum"/>
						<input type="submit" value="Change"/>
					</form>
				</div>
				<div>
					<p>Result is:</p>
				</div>
			</div>
		);
		return jsx;
	}
}
const root=document.getElementById("root");
ReactDOM.render(<App />,root);