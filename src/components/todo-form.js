import React from 'react'

export default class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { summary: '', description: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      summary: event.target.summary,
      description: event.target.description
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    const { summary, description } = event.target
    const todo = { summary, description }

    alert(todo)

    if (this.props.onSubmit) this.props.onSubmit(todo)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Todo Summary:
          <input
            name='summary'
            class='summary'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Todo Description:
          <input
            name='description'
            class='description'
            type='text'
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
