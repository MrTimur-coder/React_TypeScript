import Input from "components/Input/Input";
import {
  PageWrapper,
  PageWrapperForm,
  ButtonControl,
  InputControl,
  CardWrapper,
  Card,
  ErrorText,
} from "./styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button/Button";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  country: Yup.string()
    .required("This field can't be empty!")
    .min(4, "This field should include minimum 4 symbols")
    .max(60, "This field should include maximum 60 symbols"),
});

function Lesson_11() {
  interface University {
    name: string;
    country: string;
    web_pages: string[];
  }

  const [university, setUniversity] = useState<University[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const universityCards = university.map((value, index) => {
    return (
      <CardWrapper key={index}>
        <Card>
          <h1>Country: {value.country}</h1>{" "}
          <h2>University Name: {value.name}</h2>
          <h2>Link: {value.web_pages[0]}</h2>
        </Card>
      </CardWrapper>
    );
  });

  const countryURL = `http://universities.hipolabs.com/search?country=`;

  const getUniversityByCountry = async (country: string) => {
    try {
      const response = await axios.get(`${countryURL}${country}`);
      setIsLoading(true); // включаем режим загрузки

      setUniversity(response.data.slice(0, 15));

      if (response.data.length === 0) {
        setError("No Universities by your request");
      }
    } catch (error: any) {
      setUniversity([]);
      setError(error.response.message);
    } finally {
      setIsLoading(false); // выключаем загрузку
    }
  };

  const formik = useFormik({
    initialValues: {
      country: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      getUniversityByCountry(values.country);

      helpers.resetForm();
    },
  });
  return (
    <PageWrapper>
      <PageWrapperForm onSubmit={formik.handleSubmit}>
        <InputControl>
          <Input
            id="country"
            label="Country"
            name="country"
            placeholder="Enter Country for searching universities"
            onChange={formik.handleChange}
            value={formik.values.country}
            error={formik.errors.country}
          />
        </InputControl>
        <ButtonControl>
          <Button
            button_info="Get Universities"
            type="submit"
            disabled={isLoading}
          />
        </ButtonControl>
      </PageWrapperForm>
      <CardWrapper>{universityCards}</CardWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </PageWrapper>
  );
}

export default Lesson_11;
