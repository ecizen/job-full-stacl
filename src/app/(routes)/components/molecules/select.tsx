import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectOption =()=> {
  return (
    <Select>
    <SelectTrigger className="w-[140px] h-[35px] bg-[#f3f3f3] border-2 border-gray-300">
        <SelectValue placeholder="Defaullt" />
    </SelectTrigger>
    <SelectContent className="w-[140px]">
        <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
    </SelectContent>
    </Select>
  )
}
export default SelectOption;