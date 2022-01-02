import { useState, useEffect } from 'react/cjs/react.development';
import './App.css';
import Person from './Person'
import Developers from './Developers'
const response = [
  {
    id: 1,
    name: 'Tamer',
    city: 'Alex1',
    timeZone: 'Africa/Cairo'
  },
  {
    id: 2,
    name: 'Mohammed',
    city: 'Balex2',
    timeZone: 'Africa/Cairo'
  },
  {
    id: 3,
    name: 'Emad',
    city: 'Calex3',
    timeZone: 'Asia/Qatar'
  },
  {
    id: 4,
    name: 'Soso',
    city: 'Dalex4',
    timeZone: 'Asia/Qatar'
  },
]

const fetchPersons = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 2000);
  })
}

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [persons, setPersons] = useState([])


  // search => get value from this when input value is empty then add new state to get the value to compare it 
  const [filter, setFilter] = useState([])
  // set search value to compare it 
  const [searchQuery, setSearchQuery] = useState('')

  // city filter
  const [cityFilter, setCityFilter] = useState([])
  const [searchCity, setSearchCity] = useState('')

  const handleCitySearch = (e) => {
    setSearchCity(e.target.value)
  }

  const handleFilter = (e) => {
    setSearchQuery(e.target.value)
  }

  // compare value of searching with useEffect 
  useEffect(() => {
    if (searchQuery === "") {
      setFilter(persons)
    } else {
      setFilter(
        persons.filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
  }, [persons, searchQuery])

  useEffect(() => {
    if (searchCity === ""){
      setFilter(persons)
    } else {
      setFilter(
        persons.filter((person) => person.city.toLowerCase().includes(searchCity.toLowerCase()))
      )
    }
    
  }, [persons, searchCity])



  const handleCount = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    console.log('this is use effect that runs when any change happens if there are no array of dependencies');
    // setIsLoading(true)
    fetchPersons()
    .then(response => {
      setIsLoading(false)
      setPersons(response)
      setFilter(response)
      // setCityFilter(response)
      console.log(response);
    })
  }, [count])
  
  // const handleMouseOver = (e, person) => {
  //   console.log(person.id);
  // }

  const handleEmmit = (personId) =>{
    // alert(personId)
    setEmmit(!emmit)
  }
  const [emmit, setEmmit] = useState(false)

  // two way binding
  const handleNameChange = (name, index) => {
    setPersons(currentPerson => {
      const persons = [...currentPerson]
      persons[index] = {...persons[index], name }
      return persons;
    })
    // console.log(name, index);
  }
  const handleCityChange = (city, index) => {
    setPersons(currentPerson => {
      const persons = [...currentPerson]
      persons[index] = {...persons[index], city }
      return persons;
    })
    console.log(city, index);
  }

  return (
    <div className="App">
      <button onClick={handleCount} >add</button>
      <h1>{emmit ? 'emmted value': emmit}first react example</h1>
      <label> search by name : <input type="text" onChange={handleFilter} /></label>
      <label>search by city : <input type="text" onChange={handleCitySearch} /></label>
      {
        filter.map((person, index) => (
          <div>
            {isLoading ? <h1>loading ...</h1> :
              
              <Person 
                id={person.id}
                key={person.id} 
                name={person.name}
                index={index}
                city={person.city} 
                emmitHandle={() => {handleEmmit(person.id)}} 
                nameChange={handleNameChange}
                cityChange={handleCityChange}
                />
              // <Developers  persons={persons} ></Developers>
            }
          </div>
        ))
      }
      {/* <Person name='7mada' city='cairo' />
      <Person name='7mada' city='cairo' />
      <Person name='7mada' city='cairo' /> */}
    </div>
  );
}

export default App;
