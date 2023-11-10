import React, { Component } from 'react';
import axios from 'axios';

class Translations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToTranslate: '',
      translatedText: '',
    };
  }

  handleTranslation = () => {
    const { textToTranslate } = this.state;
    const apiKey = 'AIzaSyDK3Lfp7ZoW1TfBBWXzAmRYhIyAOwslpmw';
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    axios.post(apiUrl, {
      q: textToTranslate,
      target: 'en', // Target language (e.g., English)
    })
    .then(response => {
      this.setState({ translatedText: response.data.data.translations[0].translatedText });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textToTranslate}
          onChange={e => this.setState({ textToTranslate: e.target.value })}
        />
        <button onClick={this.handleTranslation}>Translate</button>
        <p>Translated Text: {this.state.translatedText}</p>
      </div>
    );
  }
}

export default Translations;
