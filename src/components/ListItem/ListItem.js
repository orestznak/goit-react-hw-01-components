

import { Label,Percentage } from "./ListItem.styled"
import { Box } from "components/Box"
import { getRandomHexColor } from './getColor'

export const ListItem =({item: {label, percentage}}) =>{
return (
    <Box display="flex" width="75px" flexDirection="column" justifyContent="center"  background={getRandomHexColor()}>
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
    </Box>
) 

} 


