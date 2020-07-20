import React, { Component } from "react";



class App extends Component {
  state = {
    images: [],
    currentPhotoId: null
  };
  componentDidMount() {
    fetch("https://picsum.photos/list")
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.slice(5, 205) });
      });
  }
  render() {
    return (
      <div>
        <div className="name">
          <h1>
            Random Images
          </h1>
        </div>
        {this.state.images.map(image => {
          const isActive = this.state.currentPhotoId === image.id;
          return (
            <div className="card">
              <img
              className="imageClass"
              key={image.id}
              src={`https://picsum.photos/1280/720?image=${image.id}`}
              isActive={isActive}
              onClick={() =>
                this.setState({ currentPhotoId: isActive ? null : image.id })
              }
              />
              <p>
                {image.author}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
 
export default App;


