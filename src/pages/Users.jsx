import * as React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Tooltip,
} from '@mui/material';
import { Block, Pause } from '@mui/icons-material';

// بيانات تجريبية
const usersSeed = [
  { id: 1, name: 'علي عباس',   status: 'مفعل' },
  { id: 2, name: 'محمد سعيد',  status: 'مفعل' },
  { id: 3, name: 'سارة مصطفى', status: 'مفعل' },
  { id: 4, name: 'خالد أحمد',  status: 'مفعل' },
  { id: 5, name: 'منى يوسف',   status: 'مفعل' },
];

// مولد أفاتار افتراضي (يعطي صورة مختلفة لكل مستخدم)
const getAvatarUrl = (id) => `https://i.pravatar.cc/120?u=user-${id}`;

// لون الشارة حسب الحالة
const chipColor = (status) =>
  status === 'مفعل' ? 'success' : status === 'معلق' ? 'warning' : 'error';

export default function Users() {
  const [userList, setUserList] = React.useState(
    usersSeed.map((u) => ({ ...u, avatar: getAvatarUrl(u.id) }))
  );

  const handleBlockUser = (id) => {
    setUserList((list) =>
      list.map((user) => (user.id === id ? { ...user, status: 'محظور' } : user))
    );
  };

  const handlePauseUser = (id) => {
    setUserList((list) =>
      list.map((user) => (user.id === id ? { ...user, status: 'معلق' } : user))
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
        my:'140px',
        mx: 'auto',
        p: 3,
        
        bgcolor: '#fff',
        borderRadius: 2,
      }}
    >
    

      {/* شبكة كروت بالفلكس */}
      <Box
        sx={{
          display: 'flex',
          flexWrap:'wrap',
          gap: "10px",
        }}
      >
        {userList.map((user) => (
          <Card
            key={user.id}
            sx={{
              width:'100%',
              display: 'flex',
              p:1,
              justifyItems:'center',
              justifyContent:'space-between',
              borderRadius:'10px',
              boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)'

            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 44, height: 44 }}
                >
                  {user.name?.[0] || '?'}
                </Avatar>
              }
              title={
                <Typography variant="subtitle1" fontWeight={700}>
                  {user.name}
                </Typography>
              }
              
            
            />

            

            <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end' }}>
              <Tooltip title="تعليق">
                <span>
                  <IconButton
                    color="warning"
                    onClick={() => handlePauseUser(user.id)}
                    disabled={user.status === 'محظور'}
                  >
                    <Pause />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="حظر">
                <IconButton
                  color="error"
                  onClick={() => handleBlockUser(user.id)}
                >
                  <Block />
                </IconButton>
              </Tooltip>

                <Chip
                  label={user.status}
                  color={chipColor(user.status)}
                  size="small"
                  sx={{ fontWeight: 600 }}
                />

              
            </CardActions>
            
          </Card>
        ))}
      </Box>
    </Box>
  );
}
