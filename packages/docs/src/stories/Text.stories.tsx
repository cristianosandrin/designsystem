import { Text, TextProps } from '@brasilsoluti-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum officia ad sit quis hic magni, omnis sint? Rerum explicabo vero labore quod provident temporibus recusandae voluptatibus sunt nostrum dolorem."
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  }
}
