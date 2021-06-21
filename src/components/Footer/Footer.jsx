import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

const Footer = () => {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg">
                    <Grid conatiner={5}>
                        Hello from Footer
                    </Grid>
                </Container>
            </Box>   
        </footer>
    )
}

export default Footer
