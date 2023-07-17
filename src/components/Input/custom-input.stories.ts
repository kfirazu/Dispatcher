import { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./custom-input";

export default {
    component: CustomInput,
    title: "Components/Input",
} as Meta;

type Story = StoryObj<typeof CustomInput>

export const Input: Story = {
    args: {
        name: 'search',
        placeholder: 'Search',
        id: 'search'
    }
}