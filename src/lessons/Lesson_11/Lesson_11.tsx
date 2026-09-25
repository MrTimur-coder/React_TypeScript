import Input from "components/Input/Input";
import {
  PageWrapper,
  PageWrapperForm,
  ButtonControl,
  InputControl,
  CardWrapper,
  Card,
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
  const formik = useFormik({
    initialValues: {
      country: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Submit works");
      console.log(values.country);

      helpers.resetForm();
    },
  });

  interface University {
    name: string;
    country: string;
    web_pages: string[];
  }

  const [university, setUniversity] = useState<University[]>([]);

  const universityCards = university.map((value) => {
    return (
      <CardWrapper>
        <Card>
          <h1>{value.country}</h1> <h2>{value.name}</h2> <h2>{value.web_pages[0]}</h2>
        </Card>
      </CardWrapper>
    );
  });

  //   const universityNames = university.filter(value => value.name)

  const countryURL = `http://universities.hipolabs.com/search?country=${formik.values.country}`;

  let isDisabled: boolean = false;
  const getUniversityByCountry = async () => {
    const response = await axios.get(countryURL);
    console.log(response);
    try {
      isDisabled = true;
      setUniversity(response.data.slice(0, 15));
    } catch (error) {
      console.log(error);
    } finally {
      isDisabled = false;
    }
  };

  //   getUniversityByCountry();
  //   console.log(university.name);

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
            disabled={isDisabled}
            onClick={getUniversityByCountry}
          />
        </ButtonControl>
      </PageWrapperForm>
      <CardWrapper>{universityCards}</CardWrapper>
      {/* <UniversityDisplayContainer>
            <Card firstName={formik.values.country} job={university}/>
         </UniversityDisplayContainer> */}
    </PageWrapper>
  );
}

export default Lesson_11;
