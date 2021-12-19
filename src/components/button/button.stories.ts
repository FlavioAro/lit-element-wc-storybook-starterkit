import { html, TemplateResult } from 'lit';
import './index.ts';

export default {
  title: 'Base Components/Button',
  component: 'ds-button',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  parameters?: any;
}

interface ArgTypes {
  label?: string;
  color?: string;
  disabled?: boolean;
  size?: string;
}

const Template: Story<ArgTypes> = ({ label, color, disabled, size }: ArgTypes) => {
  return html`
      <ds-button 
          color=${color} 
          size=${size}
          ?disabled="${disabled}"
      >
        ${label}
      </ds-button>`;
}

export const Button = Template.bind({});

Button.args =   {
  label: "Button label",
  color: "primary",
  size: "medium",
  disabled: false,
}

Button.argTypes = {
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'danger'],
    table: {
      category: 'Modifiers',
    },
  },
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    table: {
      category: 'Modifiers',
    },
  },
  disabled: {
    control: 'boolean',
    options: [true, false],
    table: {
      category: 'Modifiers',
    },
  }
}

Button.parameters = {
  docs: {
    source: {
      code: `
        <ds-button color="primary">Label</ds-button>
      `
    }
  }
}