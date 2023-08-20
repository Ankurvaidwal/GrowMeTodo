import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ApiInfo from '../Types/ApiInfo';
import Indeterminate from '../components/Indeterminate';

const SecondPage: React.FC = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<ApiInfo[]>([]);
    useEffect(() => {
        const userData = localStorage.getItem('formData');
        if (!userData) {
            navigate('/');
        }
        async function fetchJsonData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setRows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setRows([]);
            }
        }
        fetchJsonData();
    }, []);



    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'USER ID', width: 90 },
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'TITLE', width: 700 },
        { field: 'body', headerName: 'BODY', width: 800 },
    ];
    return (
        <div>
            <Box sx={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
            <Indeterminate />
        </div>
    )
}

export default SecondPage;