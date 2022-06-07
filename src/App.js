import React, {useState}from "react"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
     background-image:url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-functional-dog-food-promotion-main-map-image_144794.jpg');
     background-size: 100vw 100vh;
     background-repeat: no-repeat;
     @media(max-width: 375px){
    background-image:url('https://static.vecteezy.com/ti/vetor-gratis/p2/4786397-cute-hand-drawn-dogs-or-puppies-heads-pattern-on-white-background-vector-illustration-of-funny-animals-for-kids-textil-vestuario-infantil-roupas-em-amarelo-preto-cores-brancas-vetor.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
   }
   
  }
   `
const Box = styled.div`
   width: 100%;
   display: flex;
   margin: 5vh;
   flex-direction:column;
   justify-content:space-evenly;
   align-items: center;
   @media(max-width: 375px){
    width: 100%;
    display: flex;
    margin: 3vh;
    flex-direction:column;
    justify-content:space-evenly;
    align-items: center;
   }
`
const Section = styled.section`
   display: flex;
   
`
const Image = styled.img`
   width:40%  ;
   border-top-right-radius: 35vw;
   border-top-left-radius: 35vw;
   border-bottom-right-radius: 35vw;
   border-bottom-left-radius: 35vw;
   @media(max-width: 375px){
    width:70%;
    border-top-right-radius: 40vw;
    border-top-left-radius: 40vw;
    border-bottom-right-radius: 40vw;
    border-bottom-left-radius: 40vw;
  }
`
const Button = styled.button`
    margin-top:15px;
    width: 12vw;
    height: 10vh;
    border: none;
    border-radius: 50%;
    font-size: 1.7vw;
    color: black;
    background-color:#FFB400;
    transition: 0.8s;
    &:hover{
      height: 12vh;
      width: 13vw;
      font-size: 2vw;
  }
  @media(max-width: 375px){
    margin-top:5px;
    width: 75px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 4vw;
    color: black;
    background-color:#FFB400;
  }
  `
export default function Pagedog(){
  
  const [dog, setDog] = useState([])
  
  function Piclist(){
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message)
    })
  }
  return(
    <>
    <GlobalStyle/>
    <Section>
      <Box>
      <Image src={dog} alt='fotos de cachorros'/>
      <Button onClick={() => {Piclist()}}>Play</Button>
    </Box>
    </Section>
    </>
  )
}