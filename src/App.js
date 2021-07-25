import React, { Component } from "react"
import P5Wrapper from "react-p5-wrapper"
import testSketch from "./testSketch"
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => (
//   <P5Wrapper sketch={testSketch} rotation={45} />
// )

class App extends Component {
  // 初期値を45°に設定
  constructor(props) {
    super(props)
    this.state = {
      rotation: 45,
    }
  }

  // バーの値が変化するごとに回転角を変更
  rotationChange(e) {
    this.setState({ rotation: e.target.value })
  }

  // コンポーネントの描画
  // 生成されるcanvasの下にバーを描く
  render() {
    return (
      <div>
        <P5Wrapper sketch={testSketch} rotation={this.state.rotation} />
        <input type="range" value={this.state.rotation} min="0" max="360" step="1" onInput={this.rotationChange.bind(this)} />
      </div>
    )
  }
}

export default App;
