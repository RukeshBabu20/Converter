import * as React from "react";
import { FromPoint } from "../types";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function PointSelect({label, points, selected, onPointChange}:{label:string, points: FromPoint[], selected:string, onPointChange: (point:string)=>void}){

    const handleChange = (e: SelectChangeEvent) => {
        onPointChange(e.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="point-select-input-label">{label}</InputLabel>
                <Select
                    labelId="point-select-label"
                    id="point-select"
                    value={selected}
                    label="{label}"
                    onChange={handleChange}>
                        {
                            points.map((point) => 
                                (<MenuItem value={point.measure}>{point.measure}</MenuItem>)
                            )
                        }
                    </Select>
            </FormControl>
        </Box>
    )
}