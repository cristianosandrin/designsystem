import { Text, TextProps } from '@brasilsoluti-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum officia ad sit quis hic magni, omnis sint? Rerum explicabo vero labore quod provident temporibus recusandae voluptatibus sunt nostrum dolorem.",
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  }
}
