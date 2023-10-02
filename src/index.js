import ReactDOM from "react-dom"
import App from './App'
import './index.css'




const colorPalettes = [
    ['#292c3e', '#242836', '#2196f3', '#fff', 'rgba(255,255,255,0.6)'],
    ['#1e2431', '#292f3f', '#2ecc71', '#fff', 'rgba(255,255,255,0.6)'],
    ['#161c24', '#1b232f', '#1abc9c', '#fff', 'rgba(255,255,255,0.6)'],
    ['#2b2c3b', '#3b3d52', '#9b59b6', '#fff', 'rgba(255,255,255,0.6)'],
    ['#333333', '#4a4a4a', '#ff5722', '#fff', 'rgba(255,255,255,0.6)'],
    ['#292A2D', '#3A3E43', '#FFD400', '#FFFFFF', 'rgba(255,255,255,0.6)'],
    
    ];
  
  function setRandomColors() {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const [bg, bgVariant, primary, white, light] = colorPalettes[randomIndex];
    document.documentElement.style.setProperty('--color-bg', bg);
    document.documentElement.style.setProperty('--color-bg-variant', bgVariant);
    document.documentElement.style.setProperty('--color-primary', primary);
    document.documentElement.style.setProperty('--color-white', white);
    document.documentElement.style.setProperty('--color-light', light);
  }


  window.addEventListener('load', setRandomColors);


 ReactDOM.render(<App/>, document.querySelector("#root"));