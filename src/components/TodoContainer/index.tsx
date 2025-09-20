import { ThemeContext } from '../../contexts/ThemeContext';
import { themeConfig } from '../../contexts/theme';
import { useContext } from 'react';

type TodoContainerProps = {
  children: React.ReactNode;
};

export default function TodoContainer({ children }: TodoContainerProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${themeConfig[theme].layout.backgroundColor} min-h-screen`}
    >
      <div
        className={`${themeConfig[theme].layout.heroClass} bg-cover bg-center`}
      >
        <div className='max-w-[43.75rem] m-auto p-8'>{children}</div>
      </div>
    </main>
  );
}
