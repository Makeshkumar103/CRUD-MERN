import React from 'react'
const FormInput = ({details, handleChange, handleSubmit,editIndex}) => {

  // const [details, setDetails] = useState([{name:"", age:"", email:""}]);
  // const [submitted, setSubmitted] = useState([]);

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   setSubmitted([details]);
  // }
  // const handleChange = (e) => {
  //     setDetails({...details,[e.target.name]:e.target.value});
  // };

  return (
    <>
    <div>
        <h2 className='text-center p-7'>Form Input</h2>
        <form onSubmit={handleSubmit} className='flex items-center space-x-6'>
       <input
            name="name"
            value={details.name}
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            className='outline px-2'
          />
        <input
            name="age"
            value={details.age}
            placeholder="Age"
            onChange={(e) => handleChange(e)}
            className='outline px-2'
          />
          <input
            name="email"
            value={details.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            className='outline px-2'
          />
        <button type='submit' className='border-2 border-indigo-500 cursor-pointer rounded hover:rounded-lg px-4'>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>

      </form>
    </div>
    
    </>
  )
}


export default FormInput;
