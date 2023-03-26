import { Avatar, AvatarProps } from '@brasilsoluti-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: "https://github.com/cristianosandrin.png",
    alt: "Cristiano Sandrin"
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}