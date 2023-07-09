import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./button";

export default {
    component: CustomButton,
    title: "Components/Button",
} as Meta;

type Story = StoryObj<typeof CustomButton>

// const Template: Story<CustomDrodownProps> = (args) => <CustomDropdown{ ...args } />


export const PrimaryButton: Story = {
    args: {

    }
}

export const SecondaryButton: Story = {
    // render: (args) => <CustomButton {...args}/> 


}



