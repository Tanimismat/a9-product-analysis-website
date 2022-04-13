import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, CartesianGrid, Legend } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-flex justify-content-evenly pt-5'>

            <div className='ms-5'>
                <h5>Month wise sell</h5>
                <LineChart className='mx-auto' width={500} height={400} data={data}>
                    <Line dataKey={'sell'} stroke="#77ae08"></Line>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </div>
            <div>
                <h5 className='mt-5'>Investment VS Revenue</h5>
                <PieChart className='mx-auto' width={400} height={300}>
                    <Pie data={data} dataKey={'revenue'} cx='50%' cy='50%' outerRadius={60} fill='#82ca9d'></Pie>
                    <Pie data={data} dataKey={'investment'} nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;