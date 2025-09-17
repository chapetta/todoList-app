import SunIcon from '/images/icon-sun.svg'
import MoonIcon from '/images/icon-moon.svg'

export const themeConfig = {
  dark: {
    name: 'dark',
    layout: {
      heroClass: 'theme-dark',
      backgroundColor: 'bg-navy-950',
      textColor: 'text-purple-600',
      hoverText: 'hover:text-purple-100',
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
      backgroundColor: 'bg-purple-300',
      textColor: 'text-gray-600',
      hoverText: 'hover:text-navy-850',
    },
    todo: {
      backgroundColor: 'bg-white',
      borderColor: 'border-neutral-300',
      textColor: 'text-navy-850',
    },
    icon: MoonIcon,
  },
}
