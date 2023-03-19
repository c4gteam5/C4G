import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Volunteers from "../components/volunteers/Volunteers";
import VolunteerSearch from "../components/volunteers/VolunteerSearch";

const VolunteerManagement = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            pt={5}
            pb={5}
        >
            <Box width="100%" maxWidth={800} mt={4}>
                <VolunteerSearch />
            </Box>
            <Box width="100%" maxWidth={800} mt={4}>
                <Volunteers />
            </Box>
        </Box>
    );
}
export default VolunteerManagement;