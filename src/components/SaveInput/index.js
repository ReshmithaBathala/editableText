import {Component} from 'react'
import './index.css'

class SaveInput extends Component {
  state = {
    textInput: '',
    isSaved: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {textInput, isSaved} = this.state
    console.log(isSaved)

    const btnText = isSaved ? 'Edit' : 'Save'
    return (
      <div className="editable-card-container">
        <h1 className="text-heading">Editable Text Input</h1>
        <div className="input-button-container">
          {isSaved ? (
            <p className="text">{textInput}</p>
          ) : (
            <input
              type="text"
              className="input-text"
              value={textInput}
              onChange={this.onChangeTextInput}
            />
          )}

          <button
            type="button"
            className="save-edit-btn-styling"
            onClick={this.onClickSave}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default SaveInput
