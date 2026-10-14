import Button from "components/Button/Button";

import {
  BlogForm,
  BlogManagementTitle,
  BlogManagementWrapper,
  BlogTextArea,
} from "./styles";
import Cards from "../Cards/Cards";
import { createContext, useState,} from "react";
import type { BlogContextTypes } from "./types";
import { useFormik } from "formik";

// Create context
export const BlogContext = createContext<BlogContextTypes>({
  message: [],
  setMessage: () => {}
})

function BlogManagement() {
  // // Create state
  // const [textArea, setTextArea] = useState<undefined | string>(undefined); // Save textarea's values
  const [blogMessage, setBlogMessage] = useState<undefined | string[]>([]); // Save blog messages

  // const handleChange = (e: any) => {
  //   setTextArea(e.target.value);
  // };

  // const postMessage = (e: any) => {
  //   e.preventDefault();
  //   // add new value to the array only if textArea is not undefined or empty
  //   if (textArea !== undefined) {
  //     setBlogMessage((preValue: any) => [...preValue, textArea]);
  //   }
  //   console.log("Submission works: " + blogMessage); //check if submission works
  // };

  const formik = useFormik({
    initialValues: {
      textArea: "",
    },
    validateOnChange: false,
    onSubmit: (value, helpers) => {
      setBlogMessage((preValue: any) => [...preValue, value.textArea]);
      helpers.resetForm();
    },
  });

  return (
    // <BlogContext.Provider value={{ message: blogMessage }}>
    <BlogContext.Provider value={{ message: blogMessage, setMessage: setBlogMessage }}>
      <BlogManagementWrapper>
        {/* <BlogForm onSubmit={postMessage}> */}
        <BlogForm onSubmit={formik.handleSubmit}>
          <BlogManagementTitle>Blog Management Component</BlogManagementTitle>
          <BlogTextArea
            placeholder="Enter something to post ..."
            name="textArea"
            onChange={formik.handleChange}
            value={formik.values.textArea}
          />
          <Button button_info="Запостить" type="submit" />
        </BlogForm>
        <Cards />
      </BlogManagementWrapper>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
