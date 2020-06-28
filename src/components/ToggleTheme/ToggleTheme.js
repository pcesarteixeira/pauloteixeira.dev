import React, { useState, useEffect } from "react"

import * as S from './ToggleTheme.style'

export default function ToggleTheme() {
  const [ theme, setTheme ] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
      window.__setPreferredTheme('dark')
    } else {
      setTheme('light')
      window.__setPreferredTheme('light')
    }
    
    reloadDisqus()
  }

  function reloadDisqus() {
    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true
        })
      }, 300)
    }
  }

  return theme != null && <S.WrapperToggle>
    <input checked={theme === 'dark' ? 'checked' : ''} onChange={handleChangeTheme} type="checkbox" id="theme-change-button" />
    {/* eslint-disable */}
    <label className="swipe" htmlFor="theme-change-button">
      <div className="toggle"></div>
      <div className="names">
        <div className="light">Claro</div>
        <div className="dark">Escuro</div>
      </div>
    </label>
  </S.WrapperToggle>
  
}