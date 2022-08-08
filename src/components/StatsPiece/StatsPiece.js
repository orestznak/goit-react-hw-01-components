import { Box } from "components/Box"

export const StatsPiece = ({label, quantity}) => {
    return (
        <Box display="flex" flexWrap="wrap">
            <span>{label}</span>
            <span>{quantity}</span>
        </Box>
    )
}