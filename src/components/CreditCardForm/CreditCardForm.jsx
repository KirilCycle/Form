import React, { useEffect, useState } from 'react'
import s from './CreditCardForm.module.scss'
import MainInput from '../../ui/input/MainInput/MainInput'
import { classNames } from '../../utils/styling'

const CreditCardForm = () => {

  const [ccNumber, setCcNumber] = useState('')  

  const handleCctyping = (e) => {
      const input = e.target
      const key = e.key

      switch (key) { 
        case "ArrowLeft": {
            if (input.selectionStart === 0 && input.selectionEnd === 0) {
               const previous = input.previousElementSibling
               previous.focus()
               previous.selectionStart = previous.value.length - 1
               previous.selectionEnd = previous.value.length - 1
               e.preventDefault()
            }
            break
        }
        case "ArrowRight": {
            if (input.selectionStart === input.value.length &&
                input.selectionEnd === input.value.length) {
               const next = input.nextElementSibling
               next.focus()
               next.selectionStart = 1
               next.selectionEnd = 1
               e.preventDefault()
            }
            break
        }
        case "Delete": {
            if (
              input.selectionStart === input.value.length &&
              input.selectionEnd === input.value.length
            ) {
              const next = input.nextElementSibling
              next.value = next.value.substring(1, next.value.length)
              next.focus()
              next.selectionStart = 0
              next.selectionEnd = 0
              e.preventDefault()
            }
            break
          }
          case "Backspace": {
            if (input.selectionStart === 0 && input.selectionEnd === 0) {
              const prev = input.previousElementSibling
              prev.value = prev.value.substring(0, prev.value.length - 1)
              prev.focus()
              prev.selectionStart = prev.value.length
              prev.selectionEnd = prev.value.length
              e.preventDefault()
            }
            break
          }
        default: {
            if (e.ctrlKey || e.altKey) return
            if (key.length > 1) return
            if (key.match(/^[^0-9]$/)) return e.preventDefault()


            e.preventDefault()
            onInputChange(input,key)      
      }
    }
  }  

  function onInputChange(input, newValue) {
      const start = input.selectionStart
      const end  = input.selectionEnd
      updateInputValue(input, newValue, start, end)
      focusInput(input, newValue.length + start)
  }

  function updateInputValue(input, extraValue, start = 0, end = 0) {
     const newValue = `${input.value.substring(0, start)}${extraValue}${input.value.substring(end, 4)}`
     console.log(newValue.substring(0,4), 'NEW VALUE')
     input.value = newValue.substring(0,4)
     if (newValue > 4) {
        const next = input.nextElementSibling
        if (next === null) return
        updateInputValue(next, newValue.substring(4))
     }
  } 

  function focusInput (input, dataLength) {
      let addedChars = dataLength
      let currInput = input 
      while (addedChars > 4 && currInput.nextElementSibling !== null) {
        addedChars -= 4
        currInput = currInput.nextElementSibling
      }
      if (addedChars > 4) addedChars = 4
      currInput.focus()
      currInput.selectionStart = addedChars
      currInput.selectionEnd = addedChars
  }


  const onInputPaste = (e) => {
    const input = e.target
    const data = e.clipboardData.getData("text")
  
    console.log('AAAAAX')

    if (!data.match(/^[0-9]+$/)) return e.preventDefault()
  
    e.preventDefault()
    onInputChange(input, data)
  }

  return (
    <form className={s.card}>
        <label htmlFor={'cc-1'}>Номер Карти</label>
        <div onPaste={onInputPaste} onKeyDown={handleCctyping} className={s.ccInputs}>
            <input type="tel" maxLength="4" id="cc-1" aria-label="Credit Card First 4 Digits" required pattern='[0-9]{4}' />
            <input type="tel" maxLength="4" aria-label="Credit Card Second 4 Digits" required pattern='[0-9]{4}' />
            <input type="tel" maxLength="4" aria-label="Credit Card Third 4 Digits" required pattern='[0-9]{4}' />
            <input type="tel" maxLength="4" aria-label="Credit Card Fourth 4 Digits" required pattern='[0-9]{4}' />
        </div>
       <MainInput label={'cvc'} required />
       <MainInput label={'Термін дії'}  required />
    </form>
  )
}

export default CreditCardForm