import {
  createContext, useState, Dispatch, SetStateAction,
} from 'react';

export type localeTypes = 'zh-TW' | 'en-US';

// 下拉選單用
export const localeOptions: { language: localeTypes; label: string }[] = [
  { language: 'zh-TW', label: '繁體中文' },
  { language: 'en-US', label: 'English' },
];

export const LocaleContext = createContext<[
  null, null] | [localeTypes, Dispatch<SetStateAction<localeTypes>>
]>([null, null]);

export default function useNavigatorLanguage():
[localeTypes, Dispatch<SetStateAction<localeTypes>>] {
  const [locale, setLocale] = useState<localeTypes>(navigator.language as localeTypes);

  return [locale, setLocale];
}
