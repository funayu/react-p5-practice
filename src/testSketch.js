const testSketch = (p) => {
  let rotation = 0

  // 初期設定
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
  }

  // P5Wrapperコンポーネントからのpropsの受け渡し
  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180
    }
  }

  // 各フレームごとの描画内容
  p.draw = () => {
    p.background(100)
    p.normalMaterial()
    p.noStroke()
    p.push()
    p.rotateX(90)
    p.rotateZ(90)
    p.rotateY(rotation)
    p.box(100)
    p.pop()
  }
}

export default testSketch
