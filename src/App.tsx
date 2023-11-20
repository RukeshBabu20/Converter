import React from 'react';
import './App.css';
import Header from "./components/Header";
import MeasureSelect from './components/MeasureSelect';
import { MyContext } from './context/myContext';
import { Box, Grid, Paper, styled } from '@mui/material';
import { MeasureType } from './types';
import MeasuringForm from './components/MeasuringForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
}));

function App() {
  const [selectedMeasure, setSelectedMeasure] = React.useState('');

  function handleMeasureChange(measureType: MeasureType){
    setSelectedMeasure(measureType);
  }

  return (
    <MyContext.Provider value={{selectedMeasure}}>
        <Box sx={{ flexGrow: 1 }}>
          <Header></Header>
          <Grid container spacing={3}>
            <Item></Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <MeasureSelect measure={selectedMeasure} onMeasureChange={handleMeasureChange}></MeasureSelect>
              </Item>          
          </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item>
                {selectedMeasure && <MeasuringForm></MeasuringForm>}
              </Item>
            </Grid>
          </Grid>
        </Box>
    </MyContext.Provider>
  );
}

export default App;
