export type ResponsiveInput<T> = T | ResponsiveProperty<T>; // | ResponsiveArray<T>;

export type ResponsiveProperty<T> = {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
};

export type ResponsiveArray<T> = T[];
