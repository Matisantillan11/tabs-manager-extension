import { useAtom } from "jotai";
import styled from "styled-components";
import { searchAtom } from "../../atoms/input.atom";

export const SSearchInput = styled.input `
  width: 80%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #A891F9;
  outline: none;
  padding: 10px;
  font-size: 16px;
  color: #A891F9;
  background-color: #3d3d3d;
  ::placeholder {
    color: #A891F9;
  }
`

export const Input = () => {
  const [input, setInput] = useAtom(searchAtom)
  console.log(input)
  return <SSearchInput 
    onChange={(e) => setInput(e.target.value)}
    value={input}
    placeholder="Search for a tab"
  />
    
  
}