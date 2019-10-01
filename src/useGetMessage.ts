import { useState, useEffect } from 'react';
import { localeTypes } from './useNavigatorLanguage';

export default function useGetMessage(): {
  [k in localeTypes]: Record<string, string>
} | undefined {
  const [
    messages, setMessages,
  ] = useState<{ [k in localeTypes]: Record<string, string> } | undefined>(undefined);

  // 這裡假裝用 ajax 取回設定的結構
  useEffect((): void => {
    setTimeout((): void => {
      setMessages({
        'zh-TW': {
          homepageTitle: '這裡是 Home.tsx',
          homepageSubTitle: '國際化',
        },
        'en-US': {
          homepageTitle: 'Here is the Home.tsx',
          homepageSubTitle: 'internationalization',
        },
      });
    }, 500);
  }, []);

  return messages;
}
