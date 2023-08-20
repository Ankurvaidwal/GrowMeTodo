import { FormGroup } from '@mui/material'
import Department from '../Types/Department'
import SingleDepartment from './Department';
import classes from '../styles.module.css'
import config from "../customJsons/config.json";

const data: Department[] = config;

function Indeterminate() {

    return (
        <div className={classes.departments}>
            <span>GrowMeToDo</span>
            <FormGroup sx={{ marginTop: 3 }}>
                {data.map((dept) => (
                    <SingleDepartment key={dept.department} department={dept.department} sub_departments={dept.sub_departments} />
                ))}
            </FormGroup>
        </div>
    );
}

export default Indeterminate;