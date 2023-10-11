import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  AppContainer,
  CountersImageContainer,
  Heading,
  InputContainer,
  InputBox,
  Button,
  InputBoxContainer,
  Image,
  CharacterCountContainer,
} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    wordsList: [],
    searchInput: '',
  }

  onChangeInputText = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {searchInput, wordsList} = this.state
    const lengthOfWord = searchInput.length
    if (lengthOfWord > 0) {
      const newWord = {
        word: searchInput,
        length: lengthOfWord,
        id: uuidv4(),
      }
      console.log(newWord)
      this.setState({wordsList: [...wordsList, newWord], searchInput: ''})
    }
  }

  render() {
    const {wordsList, searchInput} = this.state
    const showImage = wordsList.length === 0
    console.log(wordsList)
    return (
      <AppContainer>
        <CountersImageContainer>
          <Heading>Count the characters like a Boss</Heading>
          {showImage ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <CharacterCountContainer>
              {wordsList.map(eachItem => (
                <li key={eachItem.id} className="wordsCount">
                  <p>
                    {eachItem.word}:{eachItem.length}
                  </p>
                </li>
              ))}
            </CharacterCountContainer>
          )}
        </CountersImageContainer>
        <InputContainer>
          <Heading outline>Character Counter</Heading>
          <form onSubmit={this.onClickAddButton}>
            <InputBoxContainer>
              <InputBox
                value={searchInput}
                placeholder="Enter the Characters here"
                type="text"
                onChange={this.onChangeInputText}
              />
              <Button>Add</Button>
            </InputBoxContainer>
          </form>
        </InputContainer>
      </AppContainer>
    )
  }
}

export default App
