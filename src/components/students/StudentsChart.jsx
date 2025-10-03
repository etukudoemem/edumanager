import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

export const StudentsChart = () => {
    const data = [
        {
            name: 'Total',
            uv: 234,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: 'Boys',
            uv: 126,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: 'Girls',
            uv: 108,
            pv: 4567,
            fill: '#83a6ed',
        },
        ];

    const style = {
    top: '20%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
    };

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="35%" innerRadius="30%" outerRadius="60%" barSize={40} data={data}>
                    <RadialBar
                        minAngle={15}
                        // label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    )
}