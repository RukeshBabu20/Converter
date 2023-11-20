import * as React from "react";
import { MeasureType } from "../types";
import { allMeasures } from "../store/measureStore";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function MeasureSelect({measure, onMeasureChange}: {measure:string, onMeasureChange: (measureType: MeasureType) => void }) {
    const measures = React.useMemo(allMeasures, []);
    
    const handleChange = (e: SelectChangeEvent) =>{
        onMeasureChange as any as (measureType: MeasureType) => void;
        onMeasureChange(e.target.value as MeasureType);
    }
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-measure">Measurement</InputLabel>
                <Select
                    labelId="select-measure-label"
                    id="select-measure-select"
                    value={measure}
                    label="Measurement"
                    onChange={handleChange}
                    >

                        {
                            measures.map((measure)=> 
                            (<MenuItem value={measure}>{measure}</MenuItem>)
                            )
                        }

                    </Select>
            </FormControl>
        </Box>
    )
}