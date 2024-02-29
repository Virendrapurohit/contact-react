
import React, { useState, useEffect, useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import BasicExample from './Navtabel';
import Appp from './select';

type TodoItem = {
    id: string;
    Name: string;
    Email: string;
    PhoneNumber: string;
    Qualificationn: string;
    Address: string;
    Country: string;
    State: string;
    PinCode: string;
    Experiencen: string;
    CurrentyearlyCTCC: string;
    ExpectedyearlyCTCC: string;
    Files: string;
    Gendern: string;

};

const TabelData = () => {
    const [todo, setTodo] = useState<TodoItem[]>([]);
    // const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44374/api/Contact');
                setTodo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // const handleDelete = async (id: string) => {
    //     try {
    //         await axios.delete(`https://localhost:44374/api/Contact/${id}`);
   
    //         setTodo(todo.filter(item => item.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting data:', error);
    //     }
    // };



    const columns = useMemo<MRT_ColumnDef<TodoItem>[]>(

        () => [
            {
                accessorKey: 'Name',
                header: ' Name',
                size: 150,
                Header: <i style={{ color: "green" }}>Name</i>
            },
            {
                accessorKey: 'Email',
                header: 'Email',
                size: 150,
                Header: <i style={{ color: "red" }}>Email</i>
            },
            {
                accessorKey: 'PhoneNumber',
                header: 'PhoneNumber',
                size: 150,
            },

            {
                accessorKey: 'Qualificationn',
                header: 'Qualification',
                size: 200,
            },




            {
                accessorKey: 'Address',
                header: 'Address',
                size: 200,
            },

            {
                accessorKey: 'Country',
                header: 'Country',
                size: 150,
            },
            {
                accessorKey: 'State',
                header: 'State',
                size: 150,
            },
            {
                accessorKey: 'PinCode',
                header: 'PinCode',
                size: 150,
            },
            {
                accessorKey: 'Experiencen',
                header: 'Experience',
                size: 150,
            },
            {
                accessorKey: 'CurrentyearlyCTCC',
                header: 'CurrentyearlyCTC',
                size: 150,
            },
            {
                accessorKey: 'ExpectedyearlyCTCC',
                header: 'ExpectedyearlyCTC',
                size: 150,
            },
            {
                accessorKey: 'Files',
                header: 'Files',
                size: 150,
                selector: (row: { $Files: string | undefined; }) => <img width={50} height={50} src={row.$Files} alt="sss" />

            },
            {
                accessorKey: 'Gendern',
                header: 'Gender',
                size: 150,

            },

            {

                accessorKey: 'Action',
                header: 'Action',
                size: 150,

            },

        ],
        [],
    );

    return (
        <>
            <div className="Appp">
                <BasicExample />
                <MaterialReactTable columns={columns} data={todo} />
                <Appp />

            </div>


        </>

    )

};

export default TabelData;




