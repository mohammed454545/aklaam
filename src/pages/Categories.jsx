import * as React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Tooltip,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const categories = [
  { id: 1, name: 'تقنية' },
  { id: 2, name: 'ألعاب' },
  { id: 3, name: 'برامج' },
  { id: 4, name: 'أخبار' },
  { id: 5, name: 'تعليم' },
];

export default function Categories() {
  const [newCategory, setNewCategory] = React.useState('');
  const [categoryList, setCategoryList] = React.useState(categories);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newId = Math.max(0, ...categoryList.map(c => c.id)) + 1; // تجنب تكرار id بعد الحذف
      setCategoryList([...categoryList, { id: newId, name: newCategory.trim() }]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    setCategoryList(categoryList.filter(category => category.id !== id));
  };

  const handleEditCategory = (id) => {
    const newCategoryName = prompt('أدخل اسم الفئة الجديدة');
    if (newCategoryName?.trim()) {
      setCategoryList(categoryList.map(category =>
        category.id === id ? { ...category, name: newCategoryName.trim() } : category
      ));
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: 'auto',
        my:'140px',
        p: 3,
        bgcolor: '#fff',
        borderRadius: 2,
        // boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
  

      {/* إضافة فئة جديدة */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, }}>
        <TextField
          variant="outlined"
          size="small"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="أدخل فئة جديدة"
          sx={{ flex: '1 1 260px', minWidth: 260 }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddCategory}
          sx={{ flex: '0 0 140px' ,color:'white',fontWeight:'600'}}
        >
          إضافة فئة
        </Button>
      </Box>

      {/* شبكة كروت بالفلكس */}
      <Box
        sx={{
          display: 'flex',
          // flexWrap: 'wrap',
          flexDirection:'column',
          gap: "10px",
          alignItems: 'stretch',
        }}
      >
        {categoryList.map((category) => (
          <Card
            key={category.id}
            sx={{
              minWidth: 220,
              // maxWidth: 320,
              display: 'flex',
              // flexDirection: 'column',
              borderRadius: '10px',
              boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)',
              alignContent:'space-between',
              justifyContent:'space-between'

              
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight={600} >
                {category.name}
              </Typography>
            </CardContent>

            <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end', gap: 0.5 }}>
              <Tooltip title="تعديل">
                <IconButton color="primary" onClick={() => handleEditCategory(category.id)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="حذف">
                <IconButton color="error" onClick={() => handleDeleteCategory(category.id)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
