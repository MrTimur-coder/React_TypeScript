import { useState, useEffect, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { PageWrapper, ContainerFacts, Card, Text, ErrorText } from "./styles";
function CatFact() {
  const [catFact, setCatFact] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const CAT_FACT_URL: string = "https://catfact.ninja/fact";
  const getCatFact = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(CAT_FACT_URL);
      // Тут пишем логику по успешно пришедшим данным с сервера
      setCatFact(response.data.fact);
    } catch (error: any) {
      // Тут пишем логику когда нам приходит ошибка
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  // MOUNTING
  // 1 аргумент - функция, которая должна выполниться в определенный жизненный этап компонента
  // 2 аргумент - массив зависимостей, с помощью него мы может определить жизненный этап компонента
  // Если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 этап жизненного цикла компонента - MOUNTING
  useEffect(() => {
    getCatFact();
  }, []);
  // // UPDATING
  // // UNMOUNTING
  useEffect(() => {
    return () => {
      // Тут мы ловим жизненный этап UNMOUNTING и выполняем все действия которые сделать при UNMOUNTING
      console.log("UNMOUNTING");
    };
  }, []);
  return (
    <PageWrapper>
      <Card>
        {/* <Input
          id="serch_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        /> */}
        <ContainerFacts>
          {!!catFact && <Text>{catFact}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
        <Button disabled={isLoading} button_info="Get cat fact" onClick={getCatFact} />
      </Card>
    </PageWrapper>
  );
}
export default CatFact;