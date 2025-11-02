import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';
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
    <Box dir="rtl" sx={{ bgcolor: '#fff' }}>
      <Box sx={{
        maxWidth: 1200, mx: 'auto',
      }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, py: { xs: 2, md: 4 } }}>
          {stats.map((stat) => (
            <Card key={stat.title}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(33.333% - 12px)' },
                p: 3, borderRadius: '10px', boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
                minWidth: 0,
              }}
            >
              <Typography sx={{ textAlign: 'center', fontSize: 18, fontWeight: 600 }} color="primary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography sx={{ textAlign: 'center', fontSize: 28, fontWeight: 900 }} color="secondary">
                {stat.value}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
