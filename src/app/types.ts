export type SlideKind =
  | 'Start'
  | 'Header'
  | 'ItemList'
  | 'HalfImage'
  | 'Generic';

export type VerticalAlignment = 'top' | 'bottom' | 'center';
export type HorizontalAlignment = 'left' | 'right' | 'center';

export type TextPosition = `${VerticalAlignment}-${HorizontalAlignment}`;
