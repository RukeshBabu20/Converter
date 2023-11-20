import * as React from "react";
import { useContext, useState, useMemo } from "react";
import { MyContext } from "../context/myContext";
import { Grid, Paper, SelectChangeEvent, TextField, styled } from "@mui/material";
import PointSelect from "./PointSelect";
import { MeasureType } from "../types";
import { allPoints } from "../store/measureStore";
import ValueCalculator from "./ValueCalculator";

export default function MeasuringForm() {
    const {selectedMeasure} = useContext(MyContext);

    const [fromPoint, setFromPoint] = useState('');
    const [toPoint, setToPoint] = useState('');
    const [inputValue, setInputValue] = useState(0);

    const points = useMemo(() => {
        return selectedMeasure ? allPoints(selectedMeasure as MeasureType): [];
    }, [selectedMeasure])

    const canShowValue = useMemo(() => {
        return selectedMeasure && fromPoint && toPoint;
    }, [fromPoint, toPoint]);

    function handleFromPointChange(point: string) {
        setFromPoint(point);
    }

    function handleToPointChange(point: string) {
        setToPoint(point);
    }

    function handleInputValueChange(event:any) {
        setInputValue(event.target.value);
    }

    return(
        <Paper>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Enter" variant="outlined" type="number" onChange={handleInputValueChange} />
                </Grid>
                <Grid item xs={6}>
                        <ValueCalculator measure={selectedMeasure as MeasureType} from={fromPoint} to={toPoint} inputValue={inputValue}></ValueCalculator> 
                </Grid>
                <Grid item xs={6}>
                        <PointSelect label="From" points={points} selected={fromPoint} onPointChange={handleFromPointChange}></PointSelect>
                    
                </Grid>
                <Grid item xs={6}>
                        <PointSelect label="To" points={points} selected={toPoint} onPointChange={handleToPointChange}></PointSelect>
                 
                </Grid>
            </Grid>
        </Paper>
    )
}