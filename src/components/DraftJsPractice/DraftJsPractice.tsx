import React, { useState } from 'react';
import {
  Editor, EditorState, convertToRaw, convertFromRaw, ContentState,
} from 'draft-js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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

  return (
    <Grid container>
      <Grid item xs={6} className={classes.draftEditorContainer}>
        <Paper>
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
