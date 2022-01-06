import {useState,useRef} from "react";
import { Link } from "react-router-dom";

export const Register = () => {
   
    const [form , setForm] = useState({
        username : "",
        password: "",       
        age : "",
        address : "",
        department : "",
        salary : "",
        status : "",
    });

    const handleChange = (e) => {
     const {name, value} = e.target;
   
     setForm({
        ...form,
         [name] : value,
     });

    };

    const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(form);      
      
      const payload = {
        username: form.username,
        password: form.password,
        age: form.age,
        address: form.address,
        department: form.department,
        salary: form.salary,
        status: form.status,
      };

        fetch("http://localhost:3001/users", {
            method : "POST",
            body:JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            },
        })

        .then(()=> {
            setForm("");
            
        });
    }

    return(
        <section className="Register">
        <div>    
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                <tr>
                    <td>Username</td>
                    <td><input onChange={handleChange} name="username" type="text" placeholder = "Enter your Name" /><br/></td>
                </tr>

                <tr>
                    <td>Password</td>
                    <td><input onChange={handleChange} name="password" type="password" placeholder = "Enter your Password" /><br/></td>
                </tr>

                <tr>
                    <td>Age</td>
                    <td><input onChange={handleChange} name="age" type="number" placeholder = "Enter your Age" /><br/><br/></td>
                </tr>

                <tr>
                    <td>Address</td>
                    <td><input onChange={handleChange} name="address" type="text" placeholder = "Enter your Address" /><br/><br/></td>
                </tr>

                <tr>
                    <td>Select your Department:</td>
                    <td>
                        <select name="department"  onChange={handleChange}>
                            <option >Select option </option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>Salary</td>
                    <td><input onChange={handleChange} name="salary" type="Number" placeholder = "Salary" /><br/><br/></td>
                </tr>

                <tr>
                    <td>Status</td>
                    <td><input type="checkbox" onChange={handleChange}  name="status" value="married" />Married
                        <input type="checkbox" onChange={handleChange}  name="status" value="single"  />Single
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td><input value = "submit" type="submit"/><br/></td>
                </tr>
                </thead>
            </table>

        </form>
        </div>
        </section>
    )
}
