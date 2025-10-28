import * as React from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Block, Pause } from '@mui/icons-material';

// نموذج للمستخدمين (يمكنك استبداله ببيانات حقيقية من API أو قاعدة بيانات)
const users = [
  { id: 1, name: 'علي عباس', status: 'مفعل' },
  { id: 2, name: 'محمد سعيد', status: 'مفعل' },
  { id: 3, name: 'سارة مصطفى', status: 'مفعل' },
  { id: 4, name: 'خالد أحمد', status: 'مفعل' },
  { id: 5, name: 'منى يوسف', status: 'مفعل' },
];

export default function Users() {
  const [userList, setUserList] = React.useState(users);

  const handleBlockUser = (id) => {
    setUserList(userList.map(user => 
      user.id === id ? { ...user, status: 'محظور' } : user
    ));
  };

  const handlePauseUser = (id) => {
    setUserList(userList.map(user => 
      user.id === id ? { ...user, status: 'معلق' } : user
    ));
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        إدارة المستخدمين
      </Typography>

      {/* قائمة المستخدمين */}
      <List>
        {userList.map((user) => (
          <Box key={user.id}>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <ListItemText primary={user.name} secondary={`الحالة: ${user.status}`} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  color="primary"
                  onClick={() => handlePauseUser(user.id)}
                >
                  <Pause />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleBlockUser(user.id)}
                >
                  <Block />
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
