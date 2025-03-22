import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu, MenuButton } from "@headlessui/react";

interface FilterDropdownProps {
  icon: React.ReactNode;
  title: string
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  icon,
  title
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border border-dark-gray rounded-lg w-full text-left'>
        {icon}
        <div>
          <div className="text-[15px] font-medium leading-tight text-dark-blue">
            {title}
          </div>
          <div className="text-[13px] text-dark-gray">
            Select...
          </div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className="text-2xl text-dark-gray ml-auto" />
          ) : (
            <RiArrowDownSLine className="text-2xl text-dark-gray ml-auto" />
          )
        }
      </MenuButton>
    </Menu>
  );
};

export default FilterDropdown;