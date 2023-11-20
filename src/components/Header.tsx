import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

export default function ButtonAppBar() {
    return(
        <Box sx={{ flexGrow:1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Converter
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}