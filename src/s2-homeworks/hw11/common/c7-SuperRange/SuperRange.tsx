import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 200,
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC66',
                    '&::before': {
                        display: 'block',
                        content: '""',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#00CC66',
                        boxShadow: 'none',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
