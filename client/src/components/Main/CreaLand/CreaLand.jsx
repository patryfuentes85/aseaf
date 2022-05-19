import React, { useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const CreaLand = () => {

  const [created, setCreated] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (Landing) => {
    const obj = {
      name: Landing.name,
      id: Landing.id,
      mass: Landing.mass,
      recclass: Landing.recclass,
      year: Landing.year,
      reclat: Landing.reclat,
      reclong: Landing.reclong,
    };

    console.log(obj);

    const res = await axios.post(
      "http://localhost:5000/api/astronomy/landings/create",
      obj
    );
    const data = res.data;
    console.log(data);

    if(data===`landing ${Landing.name} guardada correctamente`) {
      setCreated(true);
    }
  };

  
  return (
    <div id="createnewLanding">
      <h2>Create a Landing</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="createform">
        <Card sx={{ maxWidth: 345, margin: 5 }}>
          <CardContent className="formulariolanding">
          <TextField {...register("name")}  label="Name" variant="filled" name="name"/>
            <TextField {...register("id")}  label="ID" variant="filled" name="id"/>
            <TextField {...register("recclass")}  label="Class" variant="filled"  name="recclass"/>
            <TextField {...register("year")} variant="filled" type="date"  name="year"/>
            <TextField {...register("mass")}  label="Mass" variant="filled" name="mass"/>
            <TextField {...register("reclat")}  label="Latitude" variant="filled" name="reclat"/>
            <TextField {...register("reclong")}  label="Longitude" variant="filled" name="reclong"/>
            <Button size="normal" type="submit">Submit</Button>
          </CardContent>
        </Card>
      </form>
      {created===true?
      <div>
        <Alert severity="success">Landing Created</Alert>
      </div>
      :""}
    </div>
  );
};

export default CreaLand;