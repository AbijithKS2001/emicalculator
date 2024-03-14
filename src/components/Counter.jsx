import React, { useState } from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    Paper,
  } from '@mui/material';
function Content() {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);
  
    const calculateEMI = () => {
      // Your EMI calculation logic here
      // You can use a library like 'emi-calculator' or implement the formula yourself
      // For simplicity, let's assume a basic formula for EMI calculation here
  
      const p = parseFloat(principal);
      const r = parseFloat(interestRate) / (12 * 100); // Monthly interest rate
      const n = parseFloat(tenure);
  
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
      setEmi(emiValue.toFixed(2));
    };
  return (
    <div>
         <div>
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Loan Details
              </Typography>
              <TextField
                label="Loan Amount (Principal)"
                fullWidth
                margin="normal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
              <TextField
                label="Interest Rate (%)"
                fullWidth
                margin="normal"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <TextField
                label="Loan Tenure (Months)"
                fullWidth
                margin="normal"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={calculateEMI}>
                Calculate EMI
              </Button>
              {emi && (
                <Typography variant="h6" style={{ marginTop: '10px' }}>
                  EMI: ₹{emi}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
    </div>
  )
}

export default Content