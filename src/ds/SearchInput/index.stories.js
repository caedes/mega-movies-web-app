import SearchInput from ".";

export default {
  component: SearchInput,
  title: "Design System/Molecule/SearchInput",
};

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = { value: "Titanic" };
