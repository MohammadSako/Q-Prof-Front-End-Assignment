import FormComponent from "@/components/FormComponent";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(dataActions.spinnerHandle(false));
  // }, [dispatch]);
  // const addDataHandler = useCallback(
  //   async (e) => {
  //     // dispatch(dataActions.spinnerHandle(true));
  //     const response = await fetch("/api/new-book", {
  //       method: "POST",
  //       body: JSON.stringify(e),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     router.push("/user");
  //   },
  //   [router]
  // );

  function addDataHandler() {
    dispatch(dataActions.title());
    router.push("/user");
  }

  return (
    <div className="container mx-auto">
      <FormComponent onAddData={addDataHandler} />
    </div>
  );
};

export default Form;
