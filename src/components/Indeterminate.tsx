import { FormGroup } from '@mui/material'
import Department from '../Types/Department'
import Departments from './Departments';
import classes from '../styles.module.css'
import config from "../customJsons/config.json";

const data: Department[] = config;

function Indeterminate() {

    return (
        <div className={classes.departments}>
            <FormGroup sx={{ marginTop: 3 }}>
                {data.map((dept) => (
                    <Departments key={dept.department} department={dept.department} sub_departments={dept.sub_departments} />
                ))}
            </FormGroup>
        </div>
    );
}

export default Indeterminate;