
import './test.css'
import Logo from './dongman01.jpg'

console.log('Hello Webpack!1111')
document.getElementById('root').innerHTML = '<h1>Hello22211111</h1>'

const fn = () => {
    console.log('fn()..')
  }

  const image = new Image();
  image.src = Logo

  document.getElementById('root').appendChild(image)