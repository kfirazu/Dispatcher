import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./button";

export default {
    component: CustomButton,
    title: "Components/Button",
} as Meta;

type Story = StoryObj<typeof CustomButton>

export const PrimaryButton: Story = {

args: {

    children: 'NAVIGATE TO DISPATCH',
    type: "primary",

}
}

export const SecondaryButton: Story = {
    // render: (args) => <CustomButton {...args}/> 
    args: {

        children: 'NAVIGATE TO DISPATCH',
        type: "secondary",
        url: 'https://www.wgal.com/article/sheetz-drops-gas-prices-dollar1776-gallon-fourth-of-july/44419414',
        sx: { width: '226px' }

    }
}



