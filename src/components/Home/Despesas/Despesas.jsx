import React from 'react'
import { Dialog, Button, Card, CardActions, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment';
import NumberFormat from 'react-number-format';

function Despesas({ cardStyle, despesas, date, setDate }) {

  const [open, setOpen] = React.useState(false)
  const [limitError, setLimitError] = React.useState(false)
  const [caracteres, setCaracteres] = React.useState(0)

  // Css
  const typographyStyle = { marginTop: 2 }

 
  // Métodos
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    setDate(moment().format('YYYY-MM-DD'))
    console.log(date)
  }

  const inputLimit = (e) => {

    const { value } = e.target
    setCaracteres(value.length)

    if (value.length > 40) {
      setLimitError(true)
    } else {
      setLimitError(false)
    }
  }

  const changeDate = (e) => {
    const {value} = e.target
    setDate(value)
  }

  return (
    <div>
      <Card sx={cardStyle}>

        <Box sx={{ display: 'flex' }}>
          <CardContent align='start' sx={{ flex: '1 0 auto' }}>
            <Typography variant="h6">
              Despesas:
            </Typography>
            <Typography variant="h5">
              R$: 0.000,00
            </Typography>
          </CardContent>
          <CardActions sx={{ marginRight: 1 }}>
            <Button variant="outlined" color="error" onClick={handleClickOpen}>Adcionar Despesas</Button>
          </CardActions>
        </Box>

        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ heigth: 1 / 1 }} size="small" aria-label="a dense table">
              <TableHead sx={{ background: '#dedddc' }}>
                <TableRow>
                  <TableCell>Descrição: </TableCell>
                  <TableCell align="center">Data:</TableCell>
                  <TableCell align="left">Valor:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {despesas.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="left"> <Typography variant='span' sx={{ color: 'red', fontWeight: 'bold' }}>-</Typography> R$: {row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ marginTop: 1 }}>Adicionar Despesas</DialogTitle>
        <DialogContent sx={{ width: 400 }}>

          <Typography sx={typographyStyle}>Valor:</Typography>
          <NumberFormat
            fullWidth
            prefix="R$ "
            customInput={TextField}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            isNumericString={true}
            allowNegative={false}
            inputProps={{
              maxLength: 17
            }}
          />

          <Typography sx={typographyStyle}>Data:</Typography>
          <TextField id="outlined-basic" variant="outlined" type="date" value={date} onChange={changeDate} required fullWidth />

          <Typography sx={typographyStyle} >Descrição:</Typography>
          <TextField id="outlined-basic" onChange={inputLimit} variant="outlined" error={limitError} required multiline rows={2} limit={10} fullWidth />
          <Typography align="end">{caracteres}/40</Typography>

        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: 2, marginRight: 2, marginBottom: 2 }}>
          <Button variant="outlined" color="success" onClick={handleSubmit} disabled={limitError}>Adicionar</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Despesas