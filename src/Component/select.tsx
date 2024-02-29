import React, { useEffect, useMemo, useState } from 'react';
import { Button, Modal } from 'antd';
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table';
import axios from 'axios';
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
}
const Appp = () => {
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


    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
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
            <Button type="primary" onClick={showModal}>
                Open  Data
            </Button>
            <Modal
                open={open}
                title="Data"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk} >
                        Delete
                    </Button>,
                    <Button
                        key="link"
                        href=""
                        type="primary">
                        Edit
                    </Button>,
                ]}
            >
                <p><MaterialReactTable columns={columns} data={todo} /></p>

            </Modal>
        </>
    );
};

export default Appp;