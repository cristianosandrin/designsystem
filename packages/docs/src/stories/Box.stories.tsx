import { Box, BoxProps, Text } from '@brasilsoluti-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>Testando o elemento Box</Text>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
