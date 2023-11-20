import * as React from "react";
import { FromPoint, InputValue } from "../types";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function InputSelect({label, points, selected, onInputChange}:{label:string, points: InputValue[], selected:string, onInputChange: (point:string)=>void}){

    const handleChange = (e: SelectChangeEvent) => {
        onInputChange(e.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="point-select-input-label">{label} Point</InputLabel>
                <Select
                    labelId="point-select-label"
                    id="point-select"
                    value={selected}
                    label="{label}"
                    onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
            </FormControl>
        </Box>
    )
}