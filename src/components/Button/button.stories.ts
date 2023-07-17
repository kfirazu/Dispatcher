import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./button";

// export default {
//     component: CustomButton,
//     title: "Components/Button",
// } as Meta;

const meta = {
    title: "Components/Button",
    component: CustomButton,
    args: {
        type: 'primary'
    }

} satisfies Meta<typeof CustomButton>

type Story = StoryObj<typeof meta>

export const PrimaryButton: Story = {
    args: {
        children: 'NAVIGATE TO DISPATCH',
        url: 'www.google.com',
        type: 'primary',
        sx: {width: '226px'}


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



