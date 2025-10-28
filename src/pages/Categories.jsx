import * as React from 'react';
import { Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
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
      const newId = categoryList.length + 1;
      const newCategoryObject = { id: newId, name: newCategory };
      setCategoryList([...categoryList, newCategoryObject]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    setCategoryList(categoryList.filter(category => category.id !== id));
  };

  const handleEditCategory = (id) => {
    const newCategoryName = prompt('أدخل اسم الفئة الجديدة');
    if (newCategoryName) {
      setCategoryList(categoryList.map(category => category.id === id ? { ...category, name: newCategoryName } : category));
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        إدارة الفئات
      </Typography>

      {/* شريط البحث وزر إضافة فئة جديدة */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="أدخل فئة جديدة"
          sx={{ width: '75%' }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '20%' }}
          onClick={handleAddCategory}
        >
          إضافة فئة
        </Button>
      </Box>

      {/* قائمة الفئات */}
      <List>
        {categoryList.map((category) => (
          <Box key={category.id}>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <ListItemText primary={category.name} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  color="primary"
                  onClick={() => handleEditCategory(category.id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
