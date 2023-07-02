import { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./custom-input";
// import CustomDropdown, { CustomDrodownProps } from "./custom-dropdown";

export default {
    component: CustomInput,
    title: "Components/Input",
} as Meta;

// const Template: Story<CardProps> = (args) => <Card {...args} />;
type Story = StoryObj<typeof CustomInput>

export const Input: Story = {
    args: {
        name: 'search',
        placeholder: 'Search',
        id: 'search'
    }
}