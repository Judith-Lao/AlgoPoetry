import React, {Component} from 'react'
import store, {incrementCounter} from './store'
import Editor from './editor'


class MyTextArea extends Component {
  constructor () {
    super()
    // this.state = {}
    this.state = store.getState()
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    // InlineEditor
    // .create( document.querySelector( '#editor' ) )
    // .then( editor => {
    //     console.log( editor );
    // } )
    // .catch( error => {
    //     console.error( error );
    // } );
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  increment () {
    store.dispatch(incrementCounter())
  }

  render () {
    return (
      <div id='container'>
        <div id='counter'>
          <Editor/>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <div className="atm">
            <button id="createOneLine">Create One Line</button>
            <button id="createOneStanza">Create One Stanza</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MyTextArea

// ReactDOM.render(
//   <div>
//     <Counter />
//
//   </div>,
//   document.getElementById('app')
// )
