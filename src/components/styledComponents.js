import styled from "styled-components";
import React from "react";


export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;


export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  
`;


export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #666666;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const DivProductos = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const CardProductos = styled.div`
    margin-top 80px;
    margin-bottom: 250px;
    height: 400px;
    width: 400px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.05);
  }
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    display: block;
    &:hover {
      background-color: #D3D3D3;
      transform: scale(1.05);
  }
`;

export const WrapperTonos = styled.div`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;