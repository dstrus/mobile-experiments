import React from 'react'

import './SignIn.css'
import logo from './assets/chexology_logo@2x.png'

function SignIn(props) {
  const onChange = (ev) => {
    const inputs = Array.from(document.querySelectorAll('.signInCode'))
    let i = inputs.findIndex(input => input === ev.target)
    const { value } = ev.target

    if (value && value !== '') {
      // handle pasting of multiple characters
      if (value.length > 1) {
        // set the value of the current input to only the first character
        ev.target.value = value[0]

        // Set the value of the next input to the next character
        // until we run out of either inputs or characters.

        // i: position of current input
        // j: position of current character from `value`
        let j = 1
        while (j < value.length && i < inputs.length) {
          inputs[j].focus()
          inputs[i+1].value = value[j]
          i++
          j++
        }
      }

      // Move focus to the next input
      if (i < inputs.length - 1) {
        inputs[i + 1].focus()
      }

      // Sign in if it's the last input
      if (i === inputs.length - 1) {
        props.signIn()
        return true
      }
    }
  }

  const onKeyDown = (ev) => {
    // Handle backspace
    if (ev.which === 8) {
      const inputs = Array.from(document.querySelectorAll('.signInCode'))
      let i = inputs.findIndex(input => input === ev.target)
      if (ev.target.value === '') {
        inputs[i - 1].value = ''
        inputs[i - 1].focus()
      }
    }
  }

  return (
    <div className="SignIn">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Chexology"/>
        </div>

        <div className="inputs">
          <input
            type="text"
            className="signInCode"
            onChange={onChange}
            autoFocus />
          <input
            type="text"
            className="signInCode"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <input
            type="text"
            className="signInCode"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <input
            type="text"
            className="signInCode"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <input
            type="text"
            className="signInCode"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>

        <p>Please enter your 5-letter code.</p>
      </div>
    </div>
  )
}

export default SignIn
