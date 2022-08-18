import PropTypes from 'prop-types'

import { Title } from './Statistics.styled'
import { Box } from 'components/Box'
import { ListItem } from 'components/ListItem/ListItem'


export const Statistics = ({title, items}) =>{
    return (
    <Box 
        as="section" 
        width="360px" 
        display="block"  
        flexDirection="column" 
        alignItems="center" 
        background="#fff" 
        border="1px #fff solid" 
        marginY="16px">

        {title && (<Title>{title}</Title>)}
        <Box 
            as="ul" 
            display="flex" 
            alignItems="center" 
            justifyContent="space-between" 
            padding="0px" 
            margin="0px" >
            {items.map(item => (
                <ListItem key={item.id} item={item}/>
                )
            )}
  
        </Box>
    </Box>
    )
}


Statistics.prototype = {
    title: PropTypes.string,
    items: PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

    })

}
