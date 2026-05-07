import React,{useState} from 'react'
import './App.css';
import FormInput from './component/FormInput';
import Table from './component/Table';

function App() {
  
   const [details, setDetails] = useState({name:"", age:"", email:""});
    const [submitted, setSubmitted] = useState([]);
   const [editIndex, setEditIndex] = useState(null);
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      if (!details.name || !details.age || !details.email) {
        alert("Please fill in all fields.");
        return;
      }
      if (editIndex !== null) {
        const updatedData = [...submitted];
        updatedData[editIndex] = details;

        setSubmitted(updatedData);
        setEditIndex(null);
      }
        else {
          setSubmitted([...submitted, details]);
    }
        setDetails({name:"", age:"", email:""});
    };

    const handleDelete = (index) => {
      const filtered = submitted.filter((_, i) => i !== index);
      setSubmitted(filtered);
    }

    const handleEdit = (index) => {
      setDetails(submitted[index]);
      setEditIndex(index);
    };

    const handleChange = (e) => {
        setDetails({...details,[e.target.name]:e.target.value});
    };
  
  return (
    <div className='conatiner mx-auto'>
      <div>
        <h1 className='text-3xl font-bold text-center p-5'>Form</h1>
      </div>
      <div>
        <FormInput details={details} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} editIndex={editIndex}/>
      </div>
      <div>
        <Table submitted={submitted} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </div>
  );
}

export default App;