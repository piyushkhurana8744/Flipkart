import { useState } from "react"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
  } from '@chakra-ui/react' 
export default function Sliderprice({initialvalue,value1,value2,value3}) {
    const [sliderValue, setSliderValue] = useState(initialvalue)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box pt={6} pb={2} color="black">
        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
          <SliderMark value={value1} {...labelStyles}>
           25%
          </SliderMark>
          <SliderMark value={value2} {...labelStyles}>
           20000
          </SliderMark>
          <SliderMark value={value3} {...labelStyles}>
            30000
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }