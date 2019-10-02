import React, { useState } from 'react';
import {
  Editor, EditorState, convertToRaw, convertFromRaw, ContentState, RichUtils,
} from 'draft-js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles({
  draftEditorContainer: {
    '& .public-DraftEditorPlaceholder-root': {
      color: 'rgb(145, 151, 163)',
      position: 'absolute',
      userSelect: 'none',
    },
    '& .public-DraftEditor-content': {
      minHeight: 450,
    },
    '& ul': {
      paddingLeft: 20,
    },
  },
  textarea: {
    width: '100%',
  },
});

export default function DraftJsPractice(): JSX.Element {
  const classes = useStyles();

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText('Hello')),
  );

  const handleChangeEditorState = (internalEditorState: EditorState): void => {
    setEditorState(internalEditorState);
  };

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEditorState(EditorState.createWithContent(
      convertFromRaw(JSON.parse(event.target.value)),
    ));
  };

  const handleToggleInlineStyleClick = (inlineStyle: string): void => {
    handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <IconButton color="inherit" onClick={(): void => handleToggleInlineStyleClick('BOLD')}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton color="inherit" onClick={(): void => handleToggleInlineStyleClick('ITALIC')}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton color="inherit" onClick={(): void => handleToggleInlineStyleClick('UNDERLINE')}>
          <FormatUnderlinedIcon />
        </IconButton>
        <IconButton color="inherit" onClick={(): void => handleToggleInlineStyleClick('CODE')}>
          <CodeIcon />
        </IconButton>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.draftEditorContainer}>
          <Editor
            editorState={editorState}
            onChange={handleChangeEditorState}
            placeholder="請在此輸入文章內容"
          />
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <textarea
          rows={30}
          className={classes.textarea}
          value={JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)}
          onChange={handleChangeTextArea}
        />
      </Grid>
    </Grid>
  );
}
