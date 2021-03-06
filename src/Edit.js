import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Create from './Create';

const Edit = (props) => {

  
    
  const [lastName, setLastName] = useState(props.lastName);
  const [firstName, setFirstName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [streetNo, setStreetNo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [ssn, setSSN] = useState('');
  const [question, setQuestion] = useState('NO');
  const [licensePlate, setLicensePlate] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [isPending, setIsPending] = useState(false);
 
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      lastName,
      firstName,
      streetName,
      streetNo,
      city,
      state,
      phoneNo,
      ssn,
      question,
      licensePlate
    };

    setIsPending(true);   
   

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
      setIsPending(false);
      
    })
  }

  return (
    <div className="create">
      <h2>Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <label>Last Name</label>
        <input 
          type="text" 
          required 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>First Name</label>
        <input 
          type="text" 
          required 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Street Name</label>
        <input 
          type="text"        
          value={streetName}
          onChange={(e) => setStreetName(e.target.value)}
        />
        <label>Street Number</label>
        <input 
          type="text"        
          value={streetNo}
          onChange={(e) => setStreetNo(e.target.value)}
        />
        <label>City</label>
        <input 
          type="text" 
          required 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>State</label>
        <input 
          type="text" 
          required 
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
         <label>Phone Number</label>
        <input 
          type="text" 
          required 
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <label>Social Security Number</label>
        <input 
          type="text" 
          required 
          value={ssn}
          onChange={(e) => setSSN(e.target.value)}
        />
        <label>Own a car?</label>
        <select
          value={question}
          onChange={e=>{
            setQuestion(e.target.value)
          }}
        >
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        {question === "YES" && <div>
          <label>License Plate</label>
        <input 
          type="text" 
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />
        </div>}

        {!isPending && <button>Save</button>}
        {isPending && <button>Saving</button>}

        
      </form>
    </div>
  );
}
 
export default Edit;