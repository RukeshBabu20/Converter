import * as React from "react";
import { useMemo } from "react";
import { MeasureType } from "../types";
import { totalValue } from "../store/measureStore";
import { TextField } from "@mui/material";

export default function ValueCalculator({measure, from , to, inputValue}: {measure: MeasureType, from: string, to: string, inputValue: any}){
    
    const value = useMemo(() => totalValue(measure, from, to, inputValue), [measure, from, to, inputValue]);

    return(
        <>
            <TextField id="outlined-basic" label="Result" variant="outlined" value={value} />
        </>
    );
}