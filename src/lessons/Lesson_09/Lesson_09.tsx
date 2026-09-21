import Input from "components/Input/Input.tsx";
import { PageWrapper, Paragraph } from "./styles.ts";
import LoginForm from "components/LoginForm/LoginForm.tsx";
import CatFact from "components/CatFact/CatFact.tsx";

function Lesson_09() {
  return (
    <PageWrapper>
       <Paragraph>Lesson_09</Paragraph>
      {/* <CatFact/> */}
      <LoginForm/>
      {/*<Input error={"Some error"} name="error" id="error" label="Error" placeholder="API Error: 404"/>
      <Input disabled={true} name="disabled" id="disabled" label="Disabled" placeholder="This is disabled input due to technical problems"/>
      <Input error={undefined} name="undefined" id="undefined" label="Undefined" placeholder="API Error: 400"/> */}
    </PageWrapper>
  );
}

export default Lesson_09;
