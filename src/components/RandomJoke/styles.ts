import styled from "@emotion/styled";

export const RandomJokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 20px;
  background-color: #fff;
  width: 600px;
  min-height: 400px;
  padding: 40px;
`;

export const Joke = styled.p`
line-height: 1.6;
   font-size: 25px;
   font-weight: 600;
`
export const Error = styled.p`
   font-size: 30px;
   color: red;
`

export const Loading = styled.img`
width: 40px;
`