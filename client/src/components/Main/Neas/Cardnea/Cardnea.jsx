import React, { useState, useContext } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import neas1 from "../../../../assets/neas/neas1.png";
import neas2 from "../../../../assets/neas/neas2.png";
import neas3 from "../../../../assets/neas/neas3.png";
import neas4 from "../../../../assets/neas/neas4.png";
import neas5 from "../../../../assets/neas/neas5.png";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, TextField } from "@mui/material";
import {useForm} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { userContext } from "../../../../context/userContext";

const Cardnea = (props) => {
  const info = props.data
  const [open, setOpen] = useState(false);
  const pictures = [neas1,neas2,neas3,neas4,neas5];
  const {register, handleSubmit} = useForm()
  const randomizeImages = pictures.sort((a, b) => 0.5 - Math.random());
  const {user} = useContext(userContext);

  const removeNea = () =>  {
  //   console.log(info)
  //   let valor = info
  //  // axios.delete('http://localhost:5000/api/astronomy/neas/delete', info);
     axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: info})

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const updateNea = data => {
    let desig = {"designation": info.designation}
    let obj = {...desig,...data};
    console.log(obj,"esto es la mezcla")
    axios.put('http://localhost:5000/api/astronomy/neas/edit', obj)
    setOpen(false);

    // createPoke(data);
    // setPage(true);
  }



 return     <Card sx={{ maxWidth: 325, margin: 2,minHeight: 400, minWidth:325, borderRadius: 5}}>
      <CardMedia
        component="img"
            height="180"
            image={randomizeImages[0]}
            alt="neas picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontSize={26}>
              Designation: {info.designation}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
              Discovery date: {info.discovery_date.slice(0,10)}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight='bold' fontSize={20}>
              Orbit class: {info.orbit_class}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleClickOpen} >Update</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update this neas</DialogTitle>
                    <form  onSubmit={handleSubmit(updateNea)}>
                    <DialogContent>
                      <DialogContentText>
                        Please, update the fields, except first(Designation).This field can´t be updated, and its already filled.
                      </DialogContentText>
                      <TextField autoFocus margin="dense" id="designation" label={info.designation} type="text" fullWidth variant="standard" />   
                      <TextField autoFocus margin="dense" {...register("Discovery_date")} id="Discovery_date" type="date" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("period_yr")} id="period_yr" label="period_yr" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("pha")} id="pha" label="pha" type="text" fullWidth variant="standard" />
                      <TextField autoFocus margin="dense" {...register("orbit_class")} id="orbit_class" label="orbit_class" type="text" fullWidth variant="standard" />
                      
                    </DialogContent>
                    
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type="submit">Update</Button>
                    </DialogActions>
                    </form>
                  </Dialog>
                 
                  {/* </form> */}
              <Button size="small" onClick={removeNea}>Delete</Button>
              {user?
              <FontAwesomeIcon icon={faCartPlus} />
                :""}
            </CardActions>
            </Card>
        
              
};

export default Cardnea;
