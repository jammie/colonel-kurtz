let Actions = require('../actions/blocks')
let Btn     = require('./Button')
let React   = require('react')

module.exports = React.createClass({

  propTypes: {
    app        : React.PropTypes.object.isRequired,
    blockTypes : React.PropTypes.array.isRequired,
    onExit     : React.PropTypes.func.isRequired
  },

  componentDidMount() {
    this.getDOMNode().querySelector('button').focus()
  },

  getButton({ id, label }, i) {
    return (
      <Btn key={ id } className="col-switch-btn" onClick={ () => this._onAdd(id) }>
        { label }
      </Btn>
    )
  },

  render() {
    return (
      <nav className="col-switch-nav" role="navigation" onKeyUp={ this._onKeyUp }>
        { this.props.blockTypes.map(this.getButton)}
      </nav>
    )
  },

  _onAdd(id) {
    let { app, position, parent } = this.props
    app.push(Actions.create, id, position, parent)
  },

  _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.props.onExit()
    }
  }

})
