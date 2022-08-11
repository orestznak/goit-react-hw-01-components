import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { Lable, Quantity } from "./StatsPiece.styled";

export const StatsPiece = ({label, quantity}) => {
    return (
        <Box as="li" display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="120px"  height="120px" background="#d9f3ff" border="1px #d9ecff solid" >
            <Lable>{label}</Lable>
            <Quantity>{quantity}</Quantity>
        </Box>
    )    
}

StatsPiece.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}