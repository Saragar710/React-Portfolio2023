import {useState} from 'react';
import '../styles/Contact.css';

function Contact () {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
    
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else if(inputValue === 'message') {
        setMessage(inputValue);
      }
     
    };
  
    const handleFormSubmit = (e) => {
     e.preventDefault();
  
      
      if (!name || !email || !message) {
        setErrorMessage('Please fill out all fields');   
        return;
       
      }

     
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage("");
    };
      
    //};


//  const Contact = () => {
    return (
       <div className="container  text-center">
       <form className="form" onSubmit={handleFormSubmit}>
       <input
           value={name}
           name="name"
           onChange={handleInputChange}
           type="text"
           placeholder="name"
         />
         <input
           value={email}
           name="email"
           onChange={handleInputChange}
           type="email"
           placeholder="email"
         />
          <input
           value={message}
           name="message"
           onChange={handleInputChange}
           type="text"
           placeholder="message"
         />
         <button type="submit">Submit</button>
       </form>
       {errorMessage && (
         <div>
           <p className="error-text">{errorMessage}</p>
         </div>
       )}

       </div>
   
    );
};
// export default Contact;
export default  Contact ;