import React, { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const CreaNeas = () => {

  const [created, setCreated] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (Nea) => {
    const obj = {
      designation: Nea.designation,
      discovery_date: Nea.discovery_date,
      period_yr: Nea.period_yr,
      orbit_class: Nea.orbit_class,
      pha: Nea.pha
    };

    console.log(obj);

    const res = await axios.post(
      "http://localhost:5000/api/astronomy/neas/create",
      obj
    );
    const data = res.data;
    console.log(data);

    if(data===`Neas ${Nea.designation} guardada correctamente`) {
      setCreated(true);
    }
  };

  
  return (
    <div id="createnewNea">
      <h2>Create a new Neas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="createform">
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardContent className="formularionea">
            <TextField {...register("designation")}  label="Desgination" variant="filled" name="designation" size="normal"/>
            <TextField {...register("discovery_date")}  
            // label="Discovery Date" 
            type="date" variant="filled" name="discovery_date" size="small"/>
            <TextField {...register("period_yr")}  label="Orbit period" variant="filled"  name="period_yr" size="normal"/>
            <TextField {...register("orbit_class")}  label="Orbit class" variant="filled" name="orbit_class" size="normal"/>
            <TextField {...register("pha")}  label="pha" variant="filled" name="pha" size="normal"/>
            <Button size="normal" type="submit">Submit</Button>
          </CardContent>
        </Card>
      </form>
      {created===true?
      <div>
        <Alert severity="success">Neas Created</Alert>
      </div>
      :""}
    </div>
  );
};

export default CreaNeas;