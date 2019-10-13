//
// ──────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: G L O B A L   V A R I A B L E   S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//

export const colors = {
    lightGreen: '#4FA36A',
    darkGreen: '#186764',
    lightBlue: '#E7EDEE',
    darkBlue: '#093952',
    blueButtonText: '#88B8D1',
    blueButton: '#23536C',
    lightGray: '#CED4D5',
    darkGray: '#51585E',
    bronze: '#C86D37',
};

export const fonts = {
    primary: 'Lato, sans-serif',
    secondary: 'Merriweather, serif',
};

export const hexToRgb = (
    hex: string,
): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
