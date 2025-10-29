import * as React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const stats = [
  { title: 'متوسط التقييم', value: '4.5' },
  { title: 'عدد المقالات', value: '120' },
  { title: 'عدد المستخدمين', value: '250' },
  { title: 'عدد المشاهدات', value: '3500' },
  { title: 'عدد التعليقات', value: '980' },
  { title: 'عدد الفئات', value: '15' },
];

export default function Statistics() {
  return (
    <Box sx={{m:'auto',my:'140px',width:'1100px', padding: 3, bgcolor: '#fff', borderRadius: 2}}>
    
      
      {/* عرض الإحصائيات باستخدام Grid */}
      <Box sx={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
        {stats.map((stat, index) => (

            <Card sx={{p:'10px',py:'30px',borderRadius:'10px', bgcolor: '#fff', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)' ,width:'520px'}}>
              <Box sx={{}}>
                <Typography sx={{textAlign:'center',fontSize:'20px',fontWeight:'600'}} variant="h6" color="primary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography sx={{textAlign:'center',fontSize:'30px',fontWeight:'900'}} variant="h5" color="secondary">
                  {stat.value}
                </Typography>
              </Box>
            </Card>
        ))}
      </Box>
    </Box>
  );
}
