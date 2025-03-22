import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface FilterDropdownProps {
  icon: React.ReactNode;
  title: string;
  dropdownValues: (string | number)[];
  selectedValue: (string | number | undefined),
  setSelectedValue: React.Dispatch<React.SetStateAction<string | number | undefined>>
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  icon,
  title,
  dropdownValues,
  selectedValue,
  setSelectedValue
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative bg-off-white rounded-lg'>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border border-dark-gray rounded-lg w-full text-left'>
        {icon}
        <div>
          <div className="text-[15px] font-medium leading-tight text-dark-blue">
            {selectedValue}
          </div>
          <div className="text-[13px] text-dark-gray">
            {title}
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
      <MenuItems className='px-6 py-5 text-[15px] text-dark-gray space-y-5 shadow-md bg-off-white absolute w-full z-10 list-none rounded-b-lg'>
        {dropdownValues?.map((value, index) => (
          <MenuItem onClick={() => { setSelectedValue(value); setIsOpen(!isOpen) }} className='cursor-pointer' key={index} as="li">
            {({ focus }) => (
              <div
                className={`px-4 py-2 cursor-pointer ${focus ? 'bg-[#8c827325] transition' : ''}`}
              >
                {value}
              </div>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default FilterDropdown;