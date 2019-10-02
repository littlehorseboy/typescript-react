import React, { useState } from 'react';
import {
  Editor, EditorState, convertToRaw, convertFromRaw, ContentState, RichUtils,
} from 'draft-js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CodeIcon from '@material-ui/icons/Code';
import useStyleMap from './useStyleMap';

const useStyles = makeStyles((theme) => ({
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
  textField: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    '& .MuiSelect-root': {
      '& option': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    '& .MuiInput-underline:before': {
      border: 'none',
    },
  },
}));

export default function DraftJsPractice(): JSX.Element {
  const classes = useStyles();

  const { fontFamilyStyleMap, fontSizeStyleMap, customStyleMap } = useStyleMap();

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText('Hello')),
  );

  const [fontFamilySelected, setFontFamilySelected] = useState('');
  const [fontSizeSelected, setFontSizeSelected] = useState('');

  const handleChangeEditorState = (internalEditorState: EditorState): void => {
    setFontFamilySelected('');
    Object.keys(fontFamilyStyleMap).forEach((key): void => {
      if (internalEditorState.getCurrentInlineStyle().has(key)) {
        setFontFamilySelected(key);
      }
    });
    setFontSizeSelected('');
    Object.keys(fontSizeStyleMap).forEach((key): void => {
      if (internalEditorState.getCurrentInlineStyle().has(key)) {
        setFontSizeSelected(key);
      }
    });
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

  const handleToggleFontFamilyInlineStyleClick = (inlineStyle: string): void => {
    Object.keys(fontFamilyStyleMap).forEach((key): void => {
      if (editorState.getCurrentInlineStyle().has(key)) {
        handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, key));
      }
    });
    if (!editorState.getCurrentInlineStyle().has(inlineStyle)) {
      handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }
  };

  const handleToggleFontSizeInlineStyleClick = (inlineStyle: string): void => {
    Object.keys(fontSizeStyleMap).forEach((key): void => {
      if (editorState.getCurrentInlineStyle().has(key)) {
        handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, key));
      }
    });
    if (!editorState.getCurrentInlineStyle().has(inlineStyle)) {
      handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }
  };

  const handleChangeFontFamilySelected = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFontFamilySelected(event.target.value);
    handleToggleFontFamilyInlineStyleClick(event.target.value);
  };

  const handleChangeFontSizeSelected = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFontSizeSelected(event.target.value);
    handleToggleFontSizeInlineStyleClick(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          select
          className={classes.textField}
          value={fontFamilySelected}
          onChange={handleChangeFontFamilySelected}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">預設字型</option>
          {Object.keys(fontFamilyStyleMap).map((key): JSX.Element => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </TextField>
        <TextField
          select
          className={classes.textField}
          value={fontSizeSelected}
          onChange={handleChangeFontSizeSelected}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">預設大小</option>
          {Object.keys(fontSizeStyleMap).map((key): JSX.Element => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </TextField>

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
            customStyleMap={customStyleMap}
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
