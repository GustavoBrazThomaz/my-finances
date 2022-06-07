import React, { useEffect } from 'react'

import { Grid, AppBar, Toolbar } from '@mui/material'
import Despesas from './Despesas/Despesas';
import Renda from './Renda/Renda';
import Saldo from './Saldo/Saldo';
import moment from 'moment';



function Home() {

  const cardStyle = { maxWidth: '1000px', background: '#ededed' }
  const [date, setDate] = React.useState('') 

  useEffect(() => {
    setDate(moment().format('YYYY-MM-DD'))
  }, [])
  

  function createData(name, date, price) {
    return { name, date, price };
  }

  const renda = [
    createData('Salário', '05/05', '17.000,00'),
    createData('Apostas', '13/05', '1.254,76',),
    createData('Vendas', '15/05', '1.321,40'),
    createData('Bolo de Pote', '17/05', '135,00'),
    createData('Bolo de Potu', '07/05', '5.00'),

  ];

  const despesas = [
    createData('Restaurante', '20/05', '43,90'),
    createData('Mercado', '03/05', '982,00',),
    createData('Parcela Carro', '09/05', '766,00'),
    createData('Bolo de Pot', '07/05', '5.00'),
    createData('Bolo de Poti', '07/05', '5.00'),

  ];

  const data = [
    ["x", "Renda", "Despesas", "Saldo"],
    ["Janeiro", 1000, 500, 500],
    ["Fevereiro", 2300, 1000, 650],
    ["Março", 1700, 900, 700],
    ["Abril", 1800, 1000, 1500],
    ["Maio", 900, 500, 1000],
  ];

  const options = {
    legend: { position: "bottom" },
  };

  return (
    <div>
      <AppBar color="primary">
        <Toolbar>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} align='center'>

        <Grid item xs={12} sm={12} md={12}>
          <Saldo
            data={data}
            cardStyle={cardStyle}
            options={options}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Renda
            renda={renda}
            cardStyle={cardStyle}
            date={date}
            setDate={setDate}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Despesas
            despesas={despesas}
            cardStyle={cardStyle}
            date={date}
            setDate={setDate}
          />
        </Grid>
        
      </Grid>

    </div>
  )
}

export default Home