import { Error, Joke, Loading, RandomJokeWrapper } from "./styles";

import { useEffect, useState } from "react";

import loadingGif from "assets/loading.gif";

import axios from "axios";
import Button from "components/Button/Button";

function RandomJoke() {
  const [joke, setJoke] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const response: any = await axios.get(RANDOM_JOKE_URL);
      
      setError(undefined) // hide previous shown error

      setJoke(`${response.data.setup} 🤔 ${response.data.punchline}`);

    } catch (error: any) {
      setJoke("") // hide previous shown joke
      // setError(error.response.data.message);
      setError(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <RandomJokeWrapper>
      {!!loading && <Loading src={loadingGif}></Loading>}
      {!!joke && <Joke>{joke}</Joke>}
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
