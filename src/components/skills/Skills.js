import React from 'react'
import { Badge, Grid } from '@mantine/core'

const Skills = () => {
  return (
    <div className='py-20 md:px-20 px-10' id='skills'>
        <div className='md:text-4xl text-xl text-[#00AEEF] font-bold md:pb-10'>
          Skills
          </div>
        <ul className='flex flex-row md:justify-around pt-5'>
          <Grid>
            <div className='md:space-x-5 md:space-y-5 space-x-1 space-y-1'>
            <Badge color="indigo" size="md" variant="dot">HTML</Badge>
            <Badge color="indigo" size="md" variant="dot">SCSS</Badge>
            <Badge color="indigo" size="md" variant="dot">Responsive Design</Badge>
            <Badge color="indigo" size="md" variant="dot">Tailwind</Badge>

            <Badge color="indigo" size="md" variant="dot">CSS</Badge>
            <Badge color="indigo" size="md" variant="dot">TypeScript</Badge>
            <Badge color="indigo" size="md" variant="dot">JavaScript</Badge>
            <Badge color="indigo" size="md" variant="dot">UI/UX Design</Badge>

            <Badge color="indigo" size="md" variant="dot">Mantine</Badge>
            <Badge color="indigo" size="md" variant="dot">Material</Badge>
            <Badge color="indigo" size="md" variant="dot">Reactjs</Badge>
            <Badge color="indigo" size="md" variant="dot">Nextjs</Badge>
          </div>
          </Grid>
        </ul>
    </div>
  )
}

export default Skills