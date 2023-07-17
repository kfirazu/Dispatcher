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

export default meta

type Story = StoryObj<typeof meta>

// const Template: Story<CustomDrodownProps> = (args) => <CustomDropdown{ ...args } />


export const PrimaryButton: Story = {
    args: {
        children: 'NAVIGATE TO DISPATCH',
        url: 'www.google.com',
        type: 'primary',
        sx: {width: '226px'}

    }
}

// export const SecondaryButton: Story = {
//     // render: (args) => <CustomButton {...args}/> 


// }



