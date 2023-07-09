import { Meta, StoryObj } from "@storybook/react";
import InputDropdown from "./input-dropdown";

export default {
    component: InputDropdown,
    title: "Components/InputDropdown",
} as Meta;

// const Template: Story<CardProps> = (args) => <Card {...args} />;
type Story = StoryObj<typeof InputDropdown>

// const Template: Story<CustomDrodownProps> = (args) => <CustomDropdown{ ...args } />


export const SearchInputDropdown: Story = {
    args: {
        // IconComponent: () => null,
        id: 'input dropdwon',
        value: "Everything",
        children: ['Everything', 'Top Headlines'],
        width: '225px',
        height: '57px',
        fontWeight: '400',
    }
}



