import React, { useState, useContext, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { localeTypes, LocaleContext, localeOptions } from '../../../useNavigatorLanguage';

export default function LanguageButton(): JSX.Element {
  const [locale, setLocale] = useContext(LocaleContext);

  const optionsfindIndex = useMemo((): number => localeOptions
    .findIndex((option): boolean => option.language === locale), [locale]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(optionsfindIndex);

  function handleClickListItem(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(index: number, language: localeTypes): void {
    setSelectedIndex(index);
    setAnchorEl(null);
    if (setLocale) {
      setLocale(language);
    }
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClickListItem}
      >
        {localeOptions[selectedIndex] ? localeOptions[selectedIndex].label : ''}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {localeOptions.map((option, index): JSX.Element => (
          <MenuItem
            key={option.language}
            selected={index === selectedIndex}
            onClick={(): void => handleMenuItemClick(index, option.language)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
