import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { eGaming, electrical , biomedical , mechanical ,programming, mechatronics } from './TabContents';
import Cards from './Cards';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

export default function EventsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Dummy content for each tab


  return (
    <section className='event-page section-spacing pt-5'>
      <div className='container mt-32'>
        <div className="section-heading text-center mb-5">
            <h6>Our events</h6>
            <h1>Choose an event</h1>
        </div>
        
        <Box sx={{ width: '100%', bgcolor: 'background.paper', margin :'auto' }} >
        <div className='flex justify-center items-center'>
          <Tabs value={value} onChange={handleChange}  variant="scrollable"  scrollButtons="auto"
             aria-label="scrollable auto tabs example" centered>
            <Tab label="E gaming"  />
            <Tab label="Electrical" />
            <Tab label="Biomedical" />
            <Tab label="Mechanical" />
            <Tab label="Programming" />
            <Tab label="Mechatronics" />
          </Tabs>
          </div>
        </Box>
        <br />
        {/* Display content based on the selected tab */}
        <div className="tab-content flex flex-wrap justify-center mt-4 gap-4">
          {/* {tabContents[value].message} */}
          { value === 0 ?
          
            eGaming.map((card)=>{
            return(
              <>
              <div className="">
              <Cards
              title = {card.title}
              description={ card.description}
              image = {card.imgSrc}
              
              />
              </div>
              </>
              )
          })
          : (value ===1) ?
          electrical.map((card)=>{
            return(
              <>
              <div className="">
              <Cards
              title = {card.title}
              description={ card.description}
              image = {card.imgSrc}/>
              </div>
              </>
              
              )
          }) : (value === 2 ) ?
          biomedical.map((card)=>{
            return(<>
             <div className="">
              <Cards
              title = {card.title}
              description={ card.description}
              image = {card.imgSrc}/>
              </div>

            </>)
          }) : (value === 3) ?
          mechanical.map((card)=>{
            return(<>
             <div className="">
            <Cards
            title = {card.title}
            description={card.description}
            image = {card.imgSrc}

            />
            </div>
            </>)
          }) : (value === 4) ?
          programming.map((card)=>{
            return(<>
             <div className="">
            <Cards
            title = {card.title}
            description={ card.description}
            image = {card.imgSrc}

            />
            </div>
            </>)}) : (value === 5) ?
             mechatronics.map((card)=>{
              return(<>
               <div className="">
              <Cards
              title = {card.title}
              description={ card.description}
              image = {card.imgSrc}
  
              />
              </div>
              </>)}) : (<></>)
          


          
        }
          
        </div>
      </div>
    </section>
  );
}