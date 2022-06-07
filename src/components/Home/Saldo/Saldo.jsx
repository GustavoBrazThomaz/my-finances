import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Chart from 'react-google-charts'

function Saldo({ data, options, cardStyle }) {
    return (
        <div>
            <Card sx={cardStyle}>
                <CardContent align='start'>
                    <Typography variant="h6">
                        Saldo:
                    </Typography>
                    <Typography variant="h5">
                        R$: 0.000,00
                    </Typography>
                    <CardContent align='center'>
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                        />
                    </CardContent>
                </CardContent>
            </Card>
        </div>
    )
}

export default Saldo