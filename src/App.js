import React from 'react';
import ReactDOM from 'react-dom';
import DogVotes from './DogVotes.js'

class NavigationPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			which: null
		}
		this.navigateToDogVote = () => {
			this.setState({
				which: 'dogs'
			})
		}

	}

	renderNavigation() {
		return (
			<div>
					<p>Hello boys and girls!</p>
					<p>What shit do you want to vote on today?</p>
					<div>
						<button onClick={e=>this.navigateToDogVote()}>DOGGOS</button>
					</div>
			</div>
		)
	}

	render() {
		return this.state.which === 'dogs' ? <DogVotes /> : this.renderNavigation()
	}
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<NavigationPage />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);