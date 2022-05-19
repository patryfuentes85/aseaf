import React, { useState, useContext } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom';
import { userContext } from "../../../../context/userContext";

const Loguser = () => {

  const [loged, setLoged] = useState(false);
  const [datos, setData] = useState(false);
  const { register, handleSubmit } = useForm();
  const {login} = useContext(userContext);

  console.log(loged,"esto es loged")
  console.log(datos,"esto es datos")
  const onSubmit = async (user) => {
    const obj = {
      email: user.email,
      password: user.password,
    };

    console.log(obj);

    const res = await axios.post(
      "http://localhost:5000/api/astronomy/user/email",
      obj
    );
    const data = res.data;
    console.log(data);

    if(data===`Usuario ${user.email} logado`) {
      setLoged(true);
       login(user.email)

    } else if (data===`Usuario no existe`){
      setData(true);
    }
  };

  
  return (
    <div id="createnewNea">
      <h2>Introduce your credentials</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="createform">
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardContent className="formularionea">
            <TextField {...register("email")}  label="Email" variant="filled" name="email" size="normal"/>
            <TextField {...register("password")}  label="Password" variant="filled" name="password" size="normal"/>
            <Button size="normal" type="submit">Submit</Button>
          </CardContent>
        </Card>
      </form>
      {loged===true?
      <div>
       <Navigate to='/' />
      </div>
      :""}
       {loged===false && datos===true?
      <div>
      <Alert severity="error">Email or password dont exist</Alert>
      </div>
      :""}
      
        
    </div>
  );
};

export default Loguser;