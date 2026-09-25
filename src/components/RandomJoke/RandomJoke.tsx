import {
  DeleteButton,
  Error,
  Joke,
  JokeListContainer,
  JokeOL,
  Loading,
  RandomJokeWrapper,
} from "./styles";

import { useEffect, useState } from "react";

import loadingGif from "assets/loading.gif";

import axios from "axios";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { v4 } from "uuid";

function RandomJoke() {
  const [joke, setJoke] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  // const [search, setSearch] = useState<string>("");

  // const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  // };

  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const response: any = await axios.get(RANDOM_JOKE_URL);

      setError(undefined); // hide previous shown error

      setJoke((preValue) => {
        return [
          ...preValue,
          `${response.data.setup} 🤔 ${response.data.punchline}`,
        ];
      });
    } catch (error: any) {
      // setJoke(""); // hide previous shown joke
      // setError(error.response.data.message);
      if (error.message === "Request failed with status code 404") {
        setError(`${error.message}`);
      } else {
        setError(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };
  console.log(joke);

  // Our list of jokes
  const JokeList = joke.map((jokeEl) => {
    return (
      <JokeListContainer key={v4()}>
        <Joke>{jokeEl}</Joke>
        <DeleteButton>
          <Button
            button_info="Delete"
            isRed={true}
            onClick={() =>
              setJoke(
                joke.filter((el) => {
                  return el !== jokeEl;
                }),
              )
            }
          />
        </DeleteButton>
      </JokeListContainer>
    );
  });

  // Mounting
  useEffect(() => {
    getRandomJoke();
  }, []);

  // UPDATING
  // useEffect(() => {
  //   if (!!search) {
  //     getRandomJoke();
  //   }
  // }, [search]);

  return (
    <RandomJokeWrapper>
      {/* <Input
          id="serch_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        /> */}
      {!!loading && <Loading src={loadingGif}></Loading>}
      {!!joke && (
        <JokeOL>
          {JokeList}
          {/* <Joke>{JokeList}</Joke> */}
        </JokeOL>
      )}
      {!!error && <Error>{error}</Error>}
      <Button
        disabled={loading}
        button_info="GET RANDOM JOKE"
        onClick={getRandomJoke}
      />
    </RandomJokeWrapper>
  );
}

export default RandomJoke;
