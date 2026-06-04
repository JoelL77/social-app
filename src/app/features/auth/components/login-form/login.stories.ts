import type { Meta, StoryObj } from '@storybook/angular';
import { LoginFormComponent } from './login-form';
import { userEvent, within } from 'storybook/test';
import { signal } from '@angular/core';

const meta: Meta<LoginFormComponent> = {
    title: 'Auth/Login Form',
    component: LoginFormComponent,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {};

export const InvalidEmail: Story = {
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText('Email');

        await userEvent.type(
            emailInput,
            'correo-invalido'
        );

        emailInput.blur();
    }
};

export const ShortPassword: Story = {
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);

        const emailInput =
            canvas.getByPlaceholderText('Email');

        const passwordInput =
            canvas.getByPlaceholderText('Password');

        await userEvent.type(
            emailInput,
            'test@gmail.com'
        );

        await userEvent.type(
            passwordInput,
            '123'
        );

        passwordInput.blur();
    }
};

export const ValidForm: Story = {
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);

        await userEvent.type(
            canvas.getByPlaceholderText('Email'),
            'test@gmail.com'
        );

        await userEvent.type(
            canvas.getByPlaceholderText('Password'),
            '123456'
        );
    }
};

export const Documentation: Story = {
    parameters: {
        docs: {
            description: {
                story: `
Formulario de autenticación que permite:

- Login mediante email y contraseña.
- Validación de email requerido.
- Validación de formato de email.
- Validación de contraseña requerida.
- Login simulado con Google.
`
            }
        }
    }
};