import { useState, useEffect } from 'react'
import classes from '../styles.module.css'
import { Checkbox, FormControlLabel, IconButton } from '@mui/material'
import { Remove } from '@mui/icons-material'
import Department from '../Types/Department'

const SingleDepartment = ({ department, sub_departments }: Department) => {
    const initialSubItems = sub_departments.reduce((acc, subDept) => {
        acc[subDept] = false;
        return acc;
    }, {} as Record<string, boolean>);

    const [subcheckedItems, setSubCheckedItems] = useState(initialSubItems);
    const [checkedItems, setCheckedItems] = useState(false);
    const [hideSubDepartment, setHideSubDepartment] = useState(false);

    useEffect(() => {
        const hasUncheckedItem = Object.values(subcheckedItems).some((value) => !value);
        setCheckedItems(!hasUncheckedItem);
    }, [subcheckedItems]);

    const handleCheckboxChangeSubDirectory = (subDept: string) => {
        setSubCheckedItems((prevItems) => ({
            ...prevItems,
            [subDept]: !prevItems[subDept],
        }));
    };

    const handleCheckboxChangeDirectory = () => {
        setCheckedItems(!checkedItems);
        setSubCheckedItems((prevItems) => {
            const newState = { ...prevItems };
            for (const subDept in newState) {
                newState[subDept] = !checkedItems;
            }
            return newState;
        });
    };

    return (
        <div>
            <div className={classes.maindept}>
                <IconButton onClick={() => setHideSubDepartment(!hideSubDepartment)} color="primary">
                    <Remove />
                </IconButton>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedItems}
                            onChange={handleCheckboxChangeDirectory}
                            name={department}
                        />
                    }
                    label={department}
                />
                <p>{sub_departments.length}</p>
            </div>
            {hideSubDepartment && (
                <div className={classes.subdepartments}>
                    {sub_departments.map((subDept) => (
                        <FormControlLabel
                            key={subDept}
                            control={
                                <Checkbox
                                    checked={subcheckedItems[subDept]}
                                    onChange={() => handleCheckboxChangeSubDirectory(subDept)}
                                    name={subDept}
                                />
                            }
                            label={subDept}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SingleDepartment;