export type SlideKind =
  | 'Start'
  | 'Header'
  | 'ItemList'
  | 'LeftRight'
  | 'Generic';

export type VerticalAlignment = 'top' | 'bottom' | 'center';
export type HorizontalAlignment = 'left' | 'right' | 'center';

export type TextPosition = `${VerticalAlignment}-${HorizontalAlignment}`;
