import * as React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  Avatar,
  Chip,
  Tooltip,
} from '@mui/material';
import { Block, Pause } from '@mui/icons-material';

const usersSeed = [
  { id: 1, name: 'علي عباس',   status: 'مفعل' },
  { id: 2, name: 'محمد سعيد',  status: 'مفعل' },
  { id: 3, name: 'سارة مصطفى', status: 'مفعل' },
  { id: 4, name: 'خالد أحمد',  status: 'مفعل' },
  { id: 5, name: 'منى يوسف',   status: 'مفعل' },
];

const getAvatarUrl = (id) => `https://i.pravatar.cc/120?u=user-${id}`;
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
      dir="rtl"
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        p: { xs: 2, md: 3 },
        bgcolor: '#fff',
        borderRadius: 2,
        overflowX: 'hidden',         // حماية إضافية
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'stretch',
          minWidth: 0,               // مهم مع الـflex
        }}
      >
        {userList.map((user) => (
          <Card
            key={user.id}
            sx={{
              flex: {
                xs: '1 1 100%',
                sm: '1 1 calc(50% - 8px)',
                md: '1 1 calc(33.333% - 12px)',
              },
              minWidth: 0,           // يمنع دفع الكارد خارج العرض
              borderRadius: '10px',
              boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1.5,
            }}
          >
            {/* اليسار: أفاتار + اسم (قابل للالتفاف) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0, flex: 1 }}>
              <Avatar src={user.avatar} alt={user.name} sx={{ width: 44, height: 44 }}>
                {user.name?.[0] || '?'}
              </Avatar>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',     // قص الاسم الطويل بلا تمدد
                }}
                title={user.name}
              >
                {user.name}
              </Typography>
            </Box>

            {/* اليمين: الأزرار + الحالة */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
              <Tooltip title="تعليق">
                <span>
                  <IconButton
                    color="warning"
                    onClick={() => handlePauseUser(user.id)}
                    disabled={user.status === 'محظور'}
                    size="small"
                  >
                    <Pause />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title="حظر">
                <IconButton color="error" onClick={() => handleBlockUser(user.id)} size="small">
                  <Block />
                </IconButton>
              </Tooltip>

              <Chip
                label={user.status}
                color={chipColor(user.status)}
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
