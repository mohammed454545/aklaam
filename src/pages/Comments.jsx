import * as React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Tooltip,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

// نموذج للتعليقات (استبدله لاحقاً بمصدر حقيقي)
const comments = [
  { id: 1, user: 'علي عباس', content: 'محتوى التعليق 1', article: 'مقال تعلم البرمجة' },
  { id: 2, user: 'محمد سعيد', content: 'محتوى التعليق 2', article: 'مقال تعلم البرمجة' },
  { id: 3, user: 'سارة مصطفى', content: 'محتوى التعليق 3', article: 'مقال تعلم البرمجة' },
];

export default function Comments() {
  const [newComment, setNewComment] = React.useState('');
  const [commentList, setCommentList] = React.useState(comments);

  const nextId = React.useCallback(
    () => Math.max(0, ...commentList.map((c) => c.id)) + 1,
    [commentList]
  );

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const newCommentObject = {
      id: nextId(),
      user: 'علي سلمان',
      content: newComment.trim(),
      article: 'مقال تعلم البرمجة',
    };
    setCommentList((prev) => [...prev, newCommentObject]);
    setNewComment('');
  };

  const handleDeleteComment = (id) => {
    setCommentList((prev) => prev.filter((c) => c.id !== id));
  };

  const handleEditComment = (id) => {
    const newContent = prompt('أدخل المحتوى الجديد للتعليق');
    if (newContent?.trim()) {
      setCommentList((prev) =>
        prev.map((c) => (c.id === id ? { ...c, content: newContent.trim() } : c))
      );
    }
  };

  const getInitial = (name = '') => (name.trim() ? name.trim()[0] : '?');

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: 'auto',
        p: 3,
        bgcolor: '#fff',
        my:'140px'
      }}
    >


      {/* شبكة الكروت بالفلكس */}
      <Box
        sx={{
          display: 'flex',
          flexDirection:'column',
          gap: '10px',
        }}
      >
        {commentList.map((c) => (
          <Card
            key={c.id}
            sx={{
              minWidth: 260,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 120ms ease, box-shadow 120ms ease',
            }}
          >
            <CardHeader
              avatar={<Avatar>{getInitial(c.user)}</Avatar>}
              title={
                <Typography variant="subtitle1" fontWeight={700}>
                  {c.user}
                </Typography>
              }
              subheader={
                <Chip
                  label={` ${c.article}`}
                  size="small"
                  sx={{ direction: 'rtl', mt: 0.5 }}
                />
              }
              action={
                <Box >
                  
                  <Tooltip title="حذف">
                    <IconButton color="error" onClick={() => handleDeleteComment(c.id)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
              sx={{ pb: 0 }}
            />

            <CardContent sx={{ pt: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.9 }}>
                {c.content}
              </Typography>
            </CardContent>

            <CardActions sx={{ mt: 'auto' }}>
              {/* مساحة لأزرار إضافية لاحقًا (إعجاب/رد إلخ) */}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
