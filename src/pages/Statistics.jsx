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
    <Box sx={{ padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        الإحصائيات
      </Typography>
      
      {/* عرض الإحصائيات باستخدام Grid */}
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: '#f9f9f9', boxShadow: 1 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" color="textPrimary">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
