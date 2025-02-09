import React from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Rechart = ({ data }) => {
    return (
        <div className='mx-auto' style={{ width: '70%', height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={data}  margin={{ top: 4, right: 7, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'Products', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Price', angle: 90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="price" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Rechart;
