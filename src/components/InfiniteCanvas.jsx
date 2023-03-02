import React from 'react';
import infiniteTerrain, { renderCanvas } from '../three/infiniteTerrain';

class InfiniteCanvas extends React.Component {
  componentDidMount() {
    renderCanvas();
  }

  render() {
    return <div className={"canvas-container"}>
      <p>Use keys w,s,a,d for forward, backward, left, right. You can also zoom-in zoom-out and rotate the plane by using mouse</p>
      <div id={"infinite-canvas"} className={"infinite-canvas"}/>
    </div>
  }
}

export default InfiniteCanvas;
