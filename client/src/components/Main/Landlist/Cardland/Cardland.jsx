import React, { useState, useContext } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import land1 from "../../../../assets/landings/land1.png";
import land2 from "../../../../assets/landings/land2.png";
import land3 from "../../../../assets/landings/land3.png";
import land4 from "../../../../assets/landings/land4.png";
import land5 from "../../../../assets/landings/land5.png";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, TextField } from "@mui/material";
import {useForm} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from "../../../../context/userContext";


const Cardland = (props) => {
  const info = props.data
  const [open, setOpen] = useState(false);
  const pictures = [land1,land2,land3, land4, land5];
  const {register, handleSubmit} = useForm()
  const randomizeImages = pictures.sort((a, b) => 0.5 - Math.random());
  const {user} = useContext(userContext);

  const removeLanding = () =>  {

    // let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/landings/delete', info);
    axios.delete('http://localhost:5000/api/astronomy/landings/delete',{ data: info})


  }

 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const onSubmit = data => {
    let name = {"name": info.name}
    let id = {"id": info.id}
    let obj = {...id,...data};
    let obj1 = {...name,...obj}
    console.log(obj1,"esto es la mezcla de landings")
    axios.put('http://localhost:5000/api/astronomy/landings/edit', obj1)
     setOpen(false);

    // createPoke(data);
    // setPage(true);
  }


  return <Card sx={{ maxWidth: 325, margin: 2,minHeight: 400, minWidth:325, borderRadius: 5}}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={randomizeImages[0]}
                    alt="neas picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize={28}>
                    Name: {info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
                    Landing Year: {info.year.slice(0,4)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
                    Mass: {info.mass}
                    </Typography>
                   
                  </CardContent>
                  <CardActions>
              <Button size="small" onClick={handleClickOpen} >Update</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update this neas</DialogTitle>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                      <DialogContentText>
                        Please, update the fields, except first and second(Name and ID).This fields can´t be updated, and they are already filled.
                      </DialogContentText>
                      <TextField autoFocus margin="dense" id="name" label={info.name} type="text" fullWidth variant="standard" />   
                      <TextField autoFocus margin="dense"  id="id" label={info.id} type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("nametype")} id="nametype" label="nametype" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("recclass")} id="recclass" label="recclass" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("mass")} id="mass" label="mass" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("fall")} id="fall" label="fall" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("year")} id="year" label="year" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("reclat")} id="reclat" label="reclat" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("reclong")} id="reclong" label="reclong" type="text" fullWidth variant="standard" />
                      
                    </DialogContent>
                    
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type="submit">Update</Button>
                    </DialogActions>
                    </form>
                  </Dialog>
                 
                  {/* </form> */}
              <Button size="small" onClick={removeLanding}>Delete</Button>
              {user?
              <FontAwesomeIcon icon={faCartPlus} />
                :""}

            </CardActions>
                  </Card>
              
};

export default Cardland;
