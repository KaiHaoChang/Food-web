import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Setting = () => {
  
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--primary-color": "rgb(255,0,86)",
    "--text-color": "#0a0a0a",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": "1"
  })

  useEffect(() => {
    const root = document.documentElement
    for (let key in settings) {
      root.style.setProperty(key, settings[key])
    }
  },[settings])

  const [theme, setTheme] = useState('light')
  const [primaryCol, setPrimaryCol] = useState(0)
  const [fontSizing, setFontSizing] = useState(0)
  const [animateSpeed, setAnimateSpeed] =useState(0)

  const themes = [
    {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0a0a0a",
    "--text-light": "#575757",
    },
    {
    "--background-color": "rgb(29,29,29)",
    "--background-light": "rgb(77,77,77)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#fff",
    "--text-light": "#eceaea",
    }
  ]

  function changeTheme(i) {
    const _theme = {...themes[i]}
    setTheme(i === 0 ? 'light' : 'dark')
    // update settings
    let _settings = {..._theme}
    for (let key in _settings) {
      _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }

  const primaryColor = [
    'rgb(255, 0, 86)',
    'rgb(33, 150, 243)',
    'rgb(255, 193, 7)',
    'rgb(0, 200, 83)',
    'rgb(156, 39, 176)'
  ]

  function changeColor(i) {
    const _color = primaryColor[i]
    let _settings = {...settings}
    _settings['--primary-color'] = _color
    setPrimaryCol(i)
    setSettings(_settings)
  }

  const fontSize = [
    {title: 'SMALL', value: '12px'},
    {title: 'MEDIUM', value: '16px'},
    {title: 'LARGE', value: '20px'}
  ]

  function changeFontSize(i) {
    const _fontSize = fontSize[i]
    let _settings = {...settings}
    _settings['--font-size'] = _fontSize.value
    setFontSizing(i)
    setSettings(_settings)
  }

    const animationSpeed = [
    {title: 'SLOW', value: '3'},
    {title: 'MEDIUM', value: '1'},
    {title: 'FAST', value: '0.25'}
  ]

  function changeAnimationSpeed(i) {
    const _animate = animationSpeed[i]
    let _settings = {...settings}
    _settings['--animation-speed'] = _animate.value
    setAnimateSpeed(i)
    setSettings(_settings)
  }


  return (
    <div className='setting-page'>

      {/* Preferred Theme */}
      <div className="setting-section">
        <h2 className="setting-title">Preferred Theme</h2>
        <div className="options-container">
          <div onClick={() => changeTheme(0)} className="option option-light">
          {theme === 'light' && (
            <div className="check">
              <FontAwesomeIcon icon = {faCheck} />
            </div>
          )}
          </div>
          <div onClick={() => changeTheme(1)} className="option option-dark">
            {theme === 'dark' && (
            <div className="check">
              <FontAwesomeIcon icon = {faCheck} />
            </div>
          )}
          </div>          
        </div>
      </div>

      {/* Primary Color */}
      <div className="setting-section">
        <h2 className="setting-title">Primary Color</h2>
        <div className="options-container">
          {primaryColor.map( (item, index) => (
            <div onClick={() => changeColor(index)} style={{backgroundColor:item}} className={`option ${item}`}>
            {primaryCol === index && (
              <div className="check">
                <FontAwesomeIcon icon = {faCheck} />
              </div>
            )}
            </div>          
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="setting-section">
        <h2 className="setting-title">Font Size</h2>
        <div className="options-container">
          {fontSize.map( (item, index) => (
            <button onClick={() => changeFontSize(index)} className={`option ${item}`}>
              <div style={{display:'inline-block'}}>{item.title}</div>
            {fontSizing === index && (
              <div style={{display:'inline-block', paddingLeft:'1em'}} className="check">
                <FontAwesomeIcon icon = {faCheck} />
              </div>
            )}
            </button>          
          ))}
        </div>
      </div>

      {/* Animation Speed */}
      <div className="setting-section">
        <h2 className="setting-title">Animation Speed</h2>
        <div className="options-container">
          {animationSpeed.map( (item, index) => (
            <button onClick={() => changeAnimationSpeed(index)} className={`option ${item}`}>
              <div style={{display:'inline-block'}}>{item.title}</div>
            {animateSpeed === index && (
              <div style={{display:'inline-block', paddingLeft:'1em'}} className="check">
                <FontAwesomeIcon icon = {faCheck} />
              </div>
            )}
            </button>          
          ))}
        </div>
      </div>
    </div>
  )
}

export default Setting