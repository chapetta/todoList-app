import { render, screen } from '@testing-library/react'
import TodoHeader from '.'
import { ThemeContext } from '../../contexts/ThemeContext'
import { vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { themeConfig } from '../../contexts/theme'

describe('Header', () => {
    it('Testa se o texto Todo aparece na tela', () => {
        render(<TodoHeader />)

        const text = screen.getByText('TODO')

        expect(text).toBeInTheDocument()
    })

    it('Testa se há um botão para mudar o tema,', () => {
        render(<TodoHeader />)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    it('Testa se a função toggleTheme é chamada', async () => {
        const toggleThemeMock = vi.fn()
        render(
        <ThemeContext.Provider value={{theme: 'dark', toggleTheme: toggleThemeMock}}>
            <TodoHeader />
        </ThemeContext.Provider>
        )

        const button = screen.getByRole('button')
        await userEvent.click(button)

        expect(toggleThemeMock).toHaveBeenCalled()

    })

    it('Exibe o ícone correto de acordo com o tema', () => {
        render(
            <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: vi.fn()}}>
                <TodoHeader />
            </ThemeContext.Provider>
        )

        const imgIcon = screen.getByRole('img')

        expect(imgIcon).toHaveAttribute('src', themeConfig.dark.icon)
    })
})

