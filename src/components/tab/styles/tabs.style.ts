import styled from "styled-components";

export const STabContainer = styled.div`
  width: 100%;
  max-width: 510px;
  height: 45px;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px ;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  .tab-left{
    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  span{
    width: 0;
    height: 100%;
    background-color: #A891F9;
    transition: width 0.5s;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.25;
  }

  button {
    z-index: 10;
    width: 75px;
    height: 60%;
    margin: 20% 10px;
    font-size: 12px;
    outline: none;
    border: none;
    background-color: #4F45E4;
  }
  
  .span-active {
    z-index: 0;
    width: 100%;
  }
  
`
