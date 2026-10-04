import Message from "../Message/Message";
import { CardTitle, CardWrapper } from "./styles"

function Cards(){
   return <CardWrapper $setBgColor={"yellowgreen"}>
      <CardTitle>Card Component</CardTitle>
      <Message/>
   </CardWrapper>
}

export default Cards;