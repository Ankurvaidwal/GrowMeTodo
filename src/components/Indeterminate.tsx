import { FormGroup } from '@mui/material'
import Department from '../Model/Department'
import SingleDepartment from './SingleDepartment';
import classes from '../styles.module.css'

const data: Department[] = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
];

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