import { Component } from 'react';
import './App.css';
import marked from 'marked';
import samplePath from './sample.md'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    fetch(samplePath).then((response) => response.text()).then((text) => {
      this.setState({ text: text })
    })
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render() {

    let { text } = this.state

    return (
      <div className='container-fluid' style={{ marginTop: '5px' }}>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea className='form-control' rows='25' value={text} onChange={this.handleChange}></textarea>
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={this.renderText(text)}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
