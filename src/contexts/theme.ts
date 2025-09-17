import SunIcon from '/images/icon-sun.svg'
import MoonIcon from '/images/icon-moon.svg'

export const themeConfig = {
  dark: {
    name: 'dark',
    layout: {
      heroClass: 'theme-dark',
      backgroundColor: 'bg-navy-950',
      textColor: 'text-purple-600',
    },
    todo: {
      backgroundColor: 'bg-navy-900',
      borderColor: 'border-purple-700',
      textColor: 'text-purple-300',
    },
    icon: SunIcon, 
  },

  light: {
    name: 'light',
    layout: {
       heroClass: 'theme-light',
      backgroundColor: 'bg-white',
      textColor: 'text-navy-850',
    },
    todo: {
      backgroundColor: 'bg-white',
      borderColor: 'border-neutral-300',
      textColor: 'text-neutral-500',
    },
    icon: MoonIcon,
  },
}
