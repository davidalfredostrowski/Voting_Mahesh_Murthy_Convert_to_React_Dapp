
import React, { Component } from 'react'
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';


class App extends Component {

	state = { votes: '' }
	componentWillMount(){
		this.loadBlockchainData()
	}

	async loadBlockchainData(){
		//const web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-54-184-221-155.us-west-2.compute.amazonaws.com:8545"))
		//const network = await web3.eth.net.getNetworkType()
		//console.log(network)
		//const accounts = await web3.eth.getAccounts()
		//console.log(accounts)
		//this.setState({account: accounts[0]})



		const web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-54-184-221-155.us-west-2.compute.amazonaws.com:8545"))
		var account;
		web3.eth.getAccounts().then((f) => {
 			account = f[0];
		})

		const abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')

		const contract = new web3.eth.Contract(abi);

		// deployed via the web3 console interface...
		//contract.options.address = "0x7Ce283138b1489907Aa6Ba4601Eb08AcdDBA1892";

		contract.options.address = "0x5969691BC4E35b37015435A7AF55ca6D19923036";

		//contract.options.address = "0x71789831d83d4C8325b324eA9B5fFB27525480b5";

		const candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

		contract.methods.totalVotesFor(web3.utils.asciiToHex('Rama')).call(console.log)
	}
		


//	voteForCandidate(){
//		
//		contract.methods.totalVotesFor(web3.utils.asciiToHex('Rama')).call(console.log)
//	}





//	<button onClick={() => voteForCandidate()}> vote Again! </button>
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
