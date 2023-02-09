const theme = {
  colors: {
    backgroundDark: '#06090F',
    backgroundNormal: '#090E18',
    backgroundLight: '#151B26',
    primary: 'linear-gradient(223.75deg, #00A3FF 4.8%, #0054C6 95.02%)',
    primaryHover: 'linear-gradient(226.74deg, #00A3FF -11.28%, #0054C6 43.51%)',
    white: '#FEFBFB',
    gray: '#A3A3A3'
  },
  texts: {
    main: 'Rubik',
    secondary: 'Inter'
  },
  spacing: {
    gap0: '0px',
    gap1: '8px',
    gap2: '16px',
    gap3: '24px',
    gap4: '32px',
    gap5: '40px',
    gap6: '48px',
    gap7: '64px',
    gap8: '72px',
    gap9: '96px',
    gap10: '128px'
  },
  devices: {
    containerXL: '1216px',
    containerL: '1140px',
    containerM: '688px',
    containerS: '540px'
  }
};

export const device = {
  containerXL: `(max-width: ${theme.devices.containerXL})`,
  containerL: `(max-width: ${theme.devices.containerL})`,
  containerM: `(max-width: ${theme.devices.containerM})`,
  containerS: `(max-width: ${theme.devices.containerS})`
};

export default theme;
