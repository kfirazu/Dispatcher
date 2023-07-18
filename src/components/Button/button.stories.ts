import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./button";
import { sharedButtonStyles } from "./button.style";

// export default {
//     component: CustomButton,
//     title: "Components/Button",
// } as Meta;

const meta = {
    title: "Components/Button",
    component: CustomButton,

} satisfies Meta<typeof CustomButton>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryButton: Story = {
    args: {
        children: 'NAVIGATE TO DISPATCH',
        url: 'https://edition.cnn.com/2023/07/15/middleeast/netanyahu-admitted-hospital-intl/index.html',
        type: 'primary',
        sx: sharedButtonStyles,
        onClick: () => console.log('Clicked')

    }
}

export const SecondaryButton: Story = {
    // render: (args) => <CustomButton {...args}/> 
    args: {

        children: 'NAVIGATE TO DISPATCH',
        type: "secondary",
        url: 'https://www.wgal.com/article/sheetz-drops-gas-prices-dollar1776-gallon-fourth-of-july/44419414',
        sx: sharedButtonStyles

    }
}





