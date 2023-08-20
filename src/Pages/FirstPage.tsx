import React, { useEffect, useState } from 'react'
import { Typography, TextField, Button, Alert } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import classes from '../styles.module.css'
import User from '../Types/User'

const intialState = { Name: '', Phone: '', Email: '' }
const FirstPage: React.FC = () => {

    const [form, setform] = useState<User>(intialState);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const errorParam = new URLSearchParams(location.search).get('error');
    const navigate = useNavigate();

    useEffect(() => {
        if (errorParam === 'true') {
            navigate('/');
            setAlertTimer();

        }
    }, [errorParam]);

    const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (form.Name === '' || form.Phone === '' || form.Email === '') {
            setAlertTimer();
            return;
        }
        const formJson = JSON.stringify(form);

        setform({ Name: '', Phone: '', Email: '' });

        setLocalStorageItem('formData', formJson)
            .then(() => {
                navigate('/display-data');
            })
            .catch(() => {
                setAlertTimer();
            });
    }

    function setAlertTimer() {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <div className={classes.container}>
            {showAlert &&
                <Alert severity="error" >
                    Fill the form First
                </Alert>
            }
            <div className={classes.form}>
                <form autoComplete="off" onSubmit={(event) => { submitFormHandler(event) }}>
                    <Typography variant="h6"></Typography>
                    <TextField name="name" variant="outlined" label="Name" fullWidth onChange={(e) => { setform({ ...form, Name: e.target.value }) }} value={form.Name} />
                    <TextField name="phnumber" variant="outlined" label="Phone number" fullWidth onChange={(e) => { setform({ ...form, Phone: e.target.value }) }} value={form.Phone} />
                    <TextField name="email" variant="outlined" label="Email" fullWidth onChange={(e) => { setform({ ...form, Email: e.target.value }) }} value={form.Email} />
                    <Button className={classes.buttonSubmit} variant="contained" type="submit" fullWidth >Submit</Button>
                </form>
            </div>

        </div>
    )
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

export default FirstPage;
