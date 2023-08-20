import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button, Alert } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import classes from '../styles.module.css'
import User from '../Types/User'

const intialState = { Name: '', Phone: '', Email: '' }
const userForm: React.FC = () => {

    const [form, setform] = useState<User>(intialState);
    const [validUser, setvalidUser] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const navigate = useNavigate();

    const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
        if (form.Name === '' || form.Phone === '' || form.Email === '') {
            setShowAlert(true);
            setform({ Name: '', Phone: '', Email: '' });
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return;
        }
        const formJson = JSON.stringify(form);

        setform({ Name: '', Phone: '', Email: '' });

        setLocalStorageItem('formData', formJson)
            .then(() => {
                console.log('Value has been set in localStorage.');
                setvalidUser(true);
            })
            .catch((error) => {
                console.error('Error setting value in localStorage:', error);
            });
    }

    function setLocalStorageItem(key: string, value: string) {
        return new Promise<void>((resolve, reject) => {
            try {
                localStorage.setItem(key, value);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    useEffect(() => {
        if (validUser) {
            navigate('/display-data');
        }
    }, [validUser])


    return (
        <div className={classes.container}>
            {showAlert && <Alert severity="error" >Fill out all the imput fields</Alert>}
            <div className={classes.form}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={(event) => { submitFormHandler(event) }}>
                    <Typography variant="h6"></Typography>
                    <TextField name="name" variant="outlined" label="Name" fullWidth onChange={(e) => { setform({ ...form, Name: e.target.value }) }} value={form.Name} />
                    <TextField name="phnumber" variant="outlined" label="Phone number" fullWidth onChange={(e) => { setform({ ...form, Phone: e.target.value }) }} value={form.Phone} />
                    <TextField name="email" variant="outlined" label="Email" fullWidth onChange={(e) => { setform({ ...form, Email: e.target.value }) }} value={form.Email} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                </form>
            </div>

        </div>
    )
}

export default userForm