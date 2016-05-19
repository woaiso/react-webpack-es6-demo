let reducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREASE': return state+1
    case 'DECREASE': return state-1
    default: return state
  }
}

let store = Redux.createStore(reducer)

class RootComponent extends React.Component {
  render() {
    let {number, increase, decrease} = this.props
    return <div>
      <div>{number}</div>
      <button onClick={e=>increase()}>+</button>
      <button onClick={e=>decrease()}> - </button>
    </div>
  }
}

let mapStateToProps = state => ({
  number: state
})

let mapDispatchToProps = dispatch => ({
  increase: () => dispatch({type: 'INCREASE'}),
  decrease: () => dispatch({type: 'DECREASE'})
})


const ConnectedRootComponent = ReactRedux.connect(
	mapStateToProps, mapDispatchToProps
)(RootComponent)


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedRootComponent />
  </ReactRedux.Provider>,
  document.getElementById('container')
)
