import * as React from 'react';
import { Box, Typography, TextField, Button, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

// نموذج للتعليقات (يمكنك استبداله ببيانات حقيقية من API أو قاعدة بيانات)
const comments = [
  { id: 1, user: 'علي عباس', content: 'محتوى التعليق 1', article: 'مقال تعلم البرمجة' },
  { id: 2, user: 'محمد سعيد', content: 'محتوى التعليق 2', article: 'مقال تعلم البرمجة' },
  { id: 3, user: 'سارة مصطفى', content: 'محتوى التعليق 3', article: 'مقال تعلم البرمجة' },
];

export default function Comments() {
  const [newComment, setNewComment] = React.useState('');
  const [commentList, setCommentList] = React.useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newId = commentList.length + 1;
      const newCommentObject = { id: newId, user: 'علي سلمان', content: newComment, article: 'مقال تعلم البرمجة' };
      setCommentList([...commentList, newCommentObject]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (id) => {
    setCommentList(commentList.filter(comment => comment.id !== id));
  };

  const handleEditComment = (id) => {
    const newContent = prompt('أدخل المحتوى الجديد للتعليق');
    if (newContent) {
      setCommentList(commentList.map(comment => comment.id === id ? { ...comment, content: newContent } : comment));
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        التعليقات
      </Typography>

      {/* شريط إضافة تعليق جديد */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="أدخل تعليقك هنا..."
          sx={{ width: '80%' }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '15%' }}
          onClick={handleAddComment}
        >
          إضافة تعليق
        </Button>
      </Box>

      {/* قائمة التعليقات */}
      <List>
        {commentList.map((comment) => (
          <Box key={comment.id}>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <ListItemText primary={`${comment.user}: ${comment.content}`} secondary={`مقال: ${comment.article}`} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  color="primary"
                  onClick={() => handleEditComment(comment.id)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteComment(comment.id)}
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
