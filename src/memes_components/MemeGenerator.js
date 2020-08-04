import React from "react"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemesImgs: [],
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data;
      this.setState({allMemesImgs: memes})
    })
    this.handleChange = this.handleChange.bind(this);
    this.generateMeme = this.generateMeme.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })

  }

  generateMeme(event) {
    // prevents refresh of page
    event.preventDefault();
    const randIndex = Math.floor((Math.random() * this.state.allMemesImgs.length));
    console.log(randIndex);
    const randMeme = this.state.allMemesImgs[randIndex].url;
    this.setState({
      randomImage: randMeme,
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.generateMeme}>
          <input 
            value={this.state.topText} 
            name="topText" 
            type="text" 
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input 
            value={this.state.bottomText} 
            name="bottomText" 
            type="text" 
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator 