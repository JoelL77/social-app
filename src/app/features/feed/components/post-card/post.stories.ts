import type { Meta, StoryObj } from '@storybook/angular';

import { PostCard } from './post-card';

const meta: Meta<PostCard> = {
    title: 'Feed/Post Card',
    component: PostCard,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<PostCard>;

export const Default: Story = {
    args: {
        post: {
            id: '1',
            author: 'Joel',
            content: 'Mi primer post usando Angular SSR',
            likes: 5,
            createdAt: new Date(),
            comments: []
        }
    }
};

export const PopularPost: Story = {
    args: {
        post: {
            id: '3',
            author: 'Google User',
            content: 'Este post tiene muchos likes.',
            likes: 999,
            createdAt: new Date(),
            comments: []
        }
    }
};

export const LongContent: Story = {
    args: {
        post: {
            id: '2',
            author: 'Ana',
            content:
                'Este es un post bastante largo para verificar cómo se comporta el componente cuando el contenido ocupa varias líneas dentro de la tarjeta.',
            likes: 12,
            createdAt: new Date(),
            comments: []
        }
    }
};

export const Documentation: Story = {
    parameters: {
        docs: {
            description: {
                story: `
Tarjeta de post que permite:

- Leer distintos post.
- Dar Like a los post.
`
            }
        }
    }
};