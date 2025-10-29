import * as React from 'react';
import {
  Card, CardHeader, CardContent, IconButton, Divider, Stack, Button, Tooltip
} from '@mui/material';
import {
  FormatBold, FormatItalic, FormatUnderlined, Code,
  LooksOne, LooksTwo, FormatQuote, FormatListBulleted, FormatListNumbered,
  FormatAlignRight, Link as LinkIcon, Image as ImageIcon, CleaningServices
} from '@mui/icons-material';

export default function SimpleRichText({
  value = '',          // HTML
  onChange,
  readOnly = false,
  onSave,
}) {
  const ref = React.useRef(null);

  // مزامنة القيمة الخارجية داخل الـ div
  React.useEffect(() => {
    if (!ref.current) return;
    const currentHtml = ref.current.innerHTML;
    if (typeof value === 'string' && value !== currentHtml) {
      ref.current.innerHTML = value || '';
    }
  }, [value]);

  const exec = (cmd, arg = null) => {
    // document.execCommand بالرغم من أنها Deprecated إلا أنها أبسط حل عملي هنا
    document.execCommand(cmd, false, arg);
    // حدّث القيمة للخارج
    if (ref.current) onChange?.(ref.current.innerHTML);
  };

  const handleInput = () => {
    onChange?.(ref.current?.innerHTML || '');
  };

  const addLink = () => {
    const url = window.prompt('أدخل الرابط (URL):');
    if (!url) return;
    exec('createLink', url);
  };

  const addImage = () => {
    const url = window.prompt('أدخل رابط الصورة (URL):');
    if (!url) return;
    exec('insertImage', url);
  };

  const clearFormatting = () => {
    exec('removeFormat');
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <CardHeader
        sx={{ '& .MuiCardHeader-title': { fontWeight: 800 } }}
        action={
          onSave && !readOnly ? (
            <Button onClick={onSave} variant="contained" size="small">حفظ</Button>
          ) : null
        }
      />

      <CardContent sx={{ pt: 1,  }}>
        {!readOnly && (
          <>
            <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap' }}>
              <Tooltip title="عريض"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('bold')}><FormatBold/></IconButton></Tooltip>
              <Tooltip title="مائل"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('italic')}><FormatItalic/></IconButton></Tooltip>
              <Tooltip title="تحته خط"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('underline')}><FormatUnderlined/></IconButton></Tooltip>
              <Tooltip title="كود"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('formatBlock','pre')}><Code/></IconButton></Tooltip>

              <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />

              <Tooltip title="عنوان 1"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('formatBlock','H1')}><LooksOne/></IconButton></Tooltip>
              <Tooltip title="عنوان 2"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('formatBlock','H2')}><LooksTwo/></IconButton></Tooltip>
              <Tooltip title="اقتباس"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('formatBlock','blockquote')}><FormatQuote/></IconButton></Tooltip>

              <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />

              <Tooltip title="قائمة نقطية"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('insertUnorderedList')}><FormatListBulleted/></IconButton></Tooltip>
              <Tooltip title="قائمة رقمية"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('insertOrderedList')}><FormatListNumbered/></IconButton></Tooltip>
              <Tooltip title="محاذاة يمين"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={()=>exec('justifyRight')}><FormatAlignRight/></IconButton></Tooltip>

              <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />

              <Tooltip title="إدراج رابط"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={addLink}><LinkIcon/></IconButton></Tooltip>
              <Tooltip title="إدراج صورة"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={addImage}><ImageIcon/></IconButton></Tooltip>
              <Tooltip title="إزالة التنسيقات"><IconButton size="small" onMouseDown={(e)=>e.preventDefault()} onClick={clearFormatting}><CleaningServices/></IconButton></Tooltip>
            </Stack>
            <Divider sx={{ my: 1 }} />
          </>
        )}

        <div
          ref={ref}
          contentEditable={!readOnly}
          suppressContentEditableWarning
          onInput={handleInput}
          style={{
            minHeight: 220,
            lineHeight: 1.9,
            fontSize: 16,
            textAlign: 'right',
            outline: 'none',
          }}
          // قيمة البداية تُضبط عبر useEffect أعلاه
        />
      </CardContent>
    </Card>
  );
}
