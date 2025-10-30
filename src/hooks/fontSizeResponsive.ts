export const fontSizeResponsive = (
  sizeDesktop: number,
  sizeLaptop: number,
  sizeTablet2: number,
  sizeTablet: number,
  sizeMobile: number
) => ({
  fontSize: {
    xs: `${sizeMobile}px`, 
    sm: `${sizeTablet}px`, 
    md: `${sizeTablet2}px`,
    lg: `${sizeLaptop}px`, 
    xl: `${sizeDesktop}px`,
  },
});
