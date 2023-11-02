import { useState } from "react";

const FormList = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState('');
  

  const handleSubmit = (e) => {

      e.preventDefault();

      const form = {name, surname, birthDate, email, phone, address, password}

        if ( email !== repeatEmail) {

            setError('The two email addresses do not match!');
            setIspending(false);

        }

        else if ( email === repeatEmail ) {

            setError('');

          fetch('http://localhost:8000/form', {

          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(form)

        })

          .then( res => {

            return res.json();

          })
          .then ( data => {

              
            setIspending(true);

          })
 
  

        }





  }


  return ( 

    <div className="form-preview"> 

        <form 
        onSubmit={handleSubmit}
        className="form-preview">

          <div>

            <label> Full Name: </label>
            <input placeholder="First" type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input type="text"
            required 
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Last"
            />

          </div>

            <div>


          <label>Date of Birth:</label>
          <input type="date"
          required
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          /> 
          </div> 

          <div>
            
              <label>Email:</label>
              <input
              placeholder="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            
          </div>       

          <div>
            
            <label>Repeat Email:</label>
            <input 
            placeholder="Repeat Email Address"
            type="email"
            required
            value={repeatEmail}
            onChange={(e) => setRepeatEmail(e.target.value)}
            />
          
        </div>  

          <div>

            <label >Phone</label>
            <input className="area-code" placeholder="Area" type="text"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            pattern="\d*"
            />
            <input
            className="phone-number"
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            pattern="\d*"
            />

          </div>

            <div className="add-div">

              <label >Address:</label>
            <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street Address"
            ></textarea>

            </div>

            
            <div>

              <label>Password:</label>
              <input type="password"
              required
              value={password}
              minLength={"8"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              />

            </div>

            <div className="submit-div">

              
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button>
              Submit
            </button>
              {isPending && <div className="submitted">Submitted &#10003;</div>}
              

            </div>

            

        </form>



    </div>



   );
}
 
export default FormList;