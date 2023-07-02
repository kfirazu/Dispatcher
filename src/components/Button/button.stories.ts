import { Meta, StoryObj } from "@storybook/react";
// import CustomDropdown, { CustomDrodownProps } from "./custom-dropdown";
import CustomButton from "./button";

export default {
    component: CustomButton,
    title: "Components/Button",
} as Meta;

// const Template: Story<CardProps> = (args) => <Card {...args} />;
type Story = StoryObj<typeof CustomButton>

// const Template: Story<CustomDrodownProps> = (args) => <CustomDropdown{ ...args } />


export const PrimaryButton: Story = {
    args: {
        backgroundColor: '#0058B9',
        textColor: '#FFFFFFF',
        borderRadius: '20px',
        padding: '10px 16px'
    }
}

export const SecondaryButton: Story = {
    args: {
        backgroundColor: '#D9DBE9',
        textColor: '#5A5A89',
        borderRadius: '20px',
        padding: '10px 16px',
        children: 'Primary',
        hover: '#0058B9',
        opacity: '0.8',
        width: '226px'


    }
}


