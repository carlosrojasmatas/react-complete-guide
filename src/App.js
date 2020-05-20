import React, { useState,setState } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

const App = ( props ) =>  {
  const [personState, setPersonState]= useState(
    {
      persons:[
        {id:"1",name:"Juan",age:"18"},
        {id:"2",name:"Pedro",age:"33"},
        {id:"3",name:"Maria",age:"60"}
      ],
      showPersons:true
    }
    )
    
    const [dummyState,setDummyState]=useState("dummy string");
    
    // const switchNameHandler = (newName) =>{
    //   setPersonState({n
    //     persons:[
    //       {id:"person1",name:newName,age:"22"},
    //       {id:"person2",name:"Fran",age:"44"},
    //       {id:"person3",name:"Daniela",age:"34"}
    //     ]
    //   })
    // }
    
    const nameChangeHandler = (event, id) =>{
      const pidx = personState.persons.findIndex(p => p.id === id);
      const p = {...personState.persons[pidx]};
      //const p = Object.assign({},personState.persons[pidx]);
      p.name = event.target.value; 
      
      const persons = [...personState.persons];
      persons[pidx] = p;
      setPersonState(
        {persons:persons,
        showPersons:personState.showPersons});
      
    };
    
    const deletePersonHandler = (index) => {
      const p = [...personState.persons];
      p.splice(index,1);
      setPersonState({
        persons:p,
        showPersons:personState.showPersons
      });
    }
    
    const togglePersonsHandler = ()=>{
      const currState = personState.showPersons;
      setPersonState({
        persons:personState.persons,
        showPersons:!currState});
      }
      
      // const buttonStyle = {
      //   backgroundColor: 'green',
      //   color:'white',
      //   font: 'inherit',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer',
      //   ':hover':{
      //     backgroundColor: 'lightgreen',
      //     color: 'black'
      //   }
      // };

      // const StyledButton = styled.button`
      //       background-color: ${props => props.state ? 'red':'green'};
      //       color: white;
      //       font: inherit;
      //       border: 1px solid blue;
      //       padding: 8px;
      //       cursor: pointer;

      //       &:hover {
      //         background-color: ${props => props.state ? 'salmon':'lightgreen'};
      //         color: black;
      //       }
      // `


      let btnClass = "";

      const evalPersons = () => {
        let personsDiv = null;
        if(personState.showPersons){
          personsDiv = (
            <div>
            {personState.persons.map((per,idx) => {
              return <Person 
                  name={per.name} 
                  age = {per.age}
                  deleteHandler = {() => deletePersonHandler(idx)}
                  changeName = {(event) => nameChangeHandler(event,per.id)}
                  key={per.id}>I play futbol
              </Person>
            })}
            </div>
            );
            // buttonStyle.backgroundColor='red';
            // buttonStyle[':hover'] = {
            //   backgroundColor: 'salmon',
            //   color: 'black'
            // }
            
          }
          
          return personsDiv;
        }

        let assignedClasses= [];
        
        if(personState.persons.length <= 2){
          assignedClasses.push(classes.red);
        }

        if(personState.persons.length <= 1){
          assignedClasses.push(classes.bold);
        }

        if(personState.showPersons){
          btnClass= classes.Red;
        }
        
        return(
              <div className={classes.App}>
                <h1>I'm a react app</h1>
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={btnClass} onClick={togglePersonsHandler}>
                  Toggle persons
                </button>
                {evalPersons()}
              </div>
          );
          
        }
        
export default App;
        