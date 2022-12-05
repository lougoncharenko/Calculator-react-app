import React from 'react'
import './Calculator.css'

export const Calculator = () => {

const handleClick = (e:any) => {
    display(e.target.value)
}

const display = (value: number) => {
    document.getElementById('results').innerHTML += value
}

const calculate = () => {
    const equation = document.getElementById('results').innerHTML
    const total = eval(equation)
    document.getElementById('results').innerHTML = total
}
  return (
    <div className='calculator-grid'>
    <div
    className='output' 
    id = 'results'>
    </div> 
  
    <button className='span-two'>AC</button>
    <button>DEL</button>
    <button value = '/' onClick={handleClick}>÷</button>
    <button value = '1' onClick={handleClick}>1</button>
    <button value = '2' onClick={handleClick}>2</button>
    <button value = '3' onClick={handleClick}>3</button>
    <button value = '*' onClick={handleClick}>*</button>
    <button value = '4' onClick={handleClick}>4</button>
    <button value = '5' onClick={handleClick}>5</button>
    <button value = '6' onClick={handleClick}>6</button>
    <button value = '+' onClick={handleClick}>+</button>
    <button value = '7' onClick={handleClick}>7</button>
    <button value = '8' onClick={handleClick}>8</button>
    <button value = '9' onClick={handleClick}>9</button>
    <button value = '-' onClick={handleClick}>-</button>
    <button value = '.' onClick={handleClick}>.</button>
    <button value = '0' onClick={handleClick}>0</button>
    <button onClick = {calculate} className='span-two'>=</button>

   </div>
  )
}
