interface UseStyleMapI {
  fontFamilyStyleMap: Record<string, Record<'fontFamily', string>>;
  fontSizeStyleMap: Record<string, Record<'fontSize', number>>;
  customStyleMap: {
    [x: string]: Record<'fontFamily', string> | Record<'fontSize', number>;
  };
}

export default function useStyleMap(): UseStyleMapI {
  const fontFamilyStyleMap = {
    微軟正黑體: { fontFamily: 'Microsoft JhengHei' },
    新細明體: { fontFamily: 'PMingLiU' },
  };

  const fontSizeStyleMap = {
    8: { fontSize: 8 },
    9: { fontSize: 9 },
    10: { fontSize: 10 },
    11: { fontSize: 11 },
    12: { fontSize: 12 },
    14: { fontSize: 14 },
    16: { fontSize: 16 },
    18: { fontSize: 18 },
    24: { fontSize: 24 },
    30: { fontSize: 30 },
    36: { fontSize: 36 },
    48: { fontSize: 48 },
  };

  const customStyleMap = {
    ...fontFamilyStyleMap,
    ...fontSizeStyleMap,
  };

  return { fontFamilyStyleMap, fontSizeStyleMap, customStyleMap };
}
