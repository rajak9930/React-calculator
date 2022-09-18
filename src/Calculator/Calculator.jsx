import React,{ useState } from 'react'

import './Style.css'

const Calculator = () => {
  const[cal,setCal]=useState("")


  const clickHandler=(e)=>{
    setCal(cal.concat(e.target.value))
  }
  const clearHandler=()=>{
    setCal("")
  }
  const totalHandler=()=>{
    setCal(eval(cal))
  }
  return (
    <>
    <div className="cal">
      <input type="text" placeholder='0' id="Answer" value={cal} />
     
      <button type='button' className='button' value="9" onClick={clickHandler} >9</button>
      <button type='button' className='button' value="8" onClick={clickHandler}>8</button>
      <button type='button' className='button' value="7" onClick={clickHandler}>7</button>
      <button type='button' className='button' value="6" onClick={clickHandler}>6</button>
      <button type='button' className='button' value="5" onClick={clickHandler}>5</button>
      <button type='button' className='button' value="4" onClick={clickHandler}>4</button>
      <button type='button' className='button' value="3" onClick={clickHandler}>3</button>
      <button type='button' className='button' value="2" onClick={clickHandler}>2</button>
      <button type='button' className='button' value="1" onClick={clickHandler}>1</button>
      <button type='button' className='button' value="0" onClick={clickHandler}>0</button>
      <button type='button' className='button' value="." onClick={clickHandler}>.</button>
      <button type='button' className='button' value="+" onClick={clickHandler}>+</button>
      <button type='button' className='button' value="-" onClick={clickHandler}>-</button>
      <button type='button' className='button' value="*" onClick={clickHandler}>*</button>
      <button type='button' className='button' value="/" onClick={clickHandler}>/</button>
      <button type='button' className='button' value="%" onClick={clickHandler}>%</button>
      <button type='button' className='button btn1' value="Clear" onClick={clearHandler}>Clear</button>
      <button type='button' className='button btn1' value="=" onClick={totalHandler}>=</button>

    </div>
    </>
  )
}

export default Calculator