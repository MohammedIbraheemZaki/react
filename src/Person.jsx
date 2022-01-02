import {useState, useRef} from 'react'

const Person = ({name, city, children, emmitHandle, id, index, nameChange, cityChange}) => {
  const [click, setClick] = useState('hello')
  const [over, setOver] = useState(false)
  const [isSeniorDev, setIsSeniorDev] = useState(false)
  const [title, setTitle] = useState('DevOps')
  const handleOnClick = () => {
    console.log('a7a');
    setClick('ahln ya 3m')
  }
  const handleMouseOver = () => {
    setOver(true)
  }
  const handleMouseOut = () => {
    setOver(false)
  }
  const handleIsSeniorDev = () => {
    setIsSeniorDev(!isSeniorDev)
  }

  const handleChange = (e) => {
    const {name, value, checked} = e.target
    if(name === 'SenDev'){
      setIsSeniorDev(checked)
    } else {
      setTitle(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedTitle.current.value);
    console.log(seniorDev.current.checked);
  }

  // two way binding (function comes from parent to child)
  const changeName = (e) => {
    const name = e.target.value
    nameChange(name, index)
    // console.log(e.target.value, index) 
  }
  const changeCity = (e) => {
    const city = e.target.value
    cityChange(city, index)
  }
  const seniorDev = useRef(false)
  const selectedTitle = useRef('a7a')

  return (
    <div key={id} className={`App-header ${over ? 'App-logo' : ''}`} onClick={() => emmitHandle(id)}>
      <h1>this is a person his name is {name} & i am living in {city} </h1>
      <h2>this is from click : {click}</h2>
      {children}
      {/* <button onClick={handleOnClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>click</button> */}
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="title">
          Title : 
          <input type="text" value={name} onChange={changeName} />
        </label>
        <label htmlFor="city">
          City : <input type="text" value={city} onChange={changeCity} />
        </label>
        <label htmlFor="Is Senior" className={isSeniorDev ? 'App-link' : ''}>
          Is Senior : <input name="SenDev" type="checkbox"  ref={seniorDev} />
          <label htmlFor="title">
            Title : 
            <select name="title" id="title" value={title} ref={selectedTitle} >
              <option value="cto">CTO</option>
              <option value="a7a">A7A</option>
              <option value="DevOps">DevOps</option>
            </select>
          </label>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Person
