// import { DatePicker } from "@mui/x-date-pickers";
import useInput from "../components/layouts/use-input";
// import DatePickers from "@/UI/DatePickers";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { useRouter } from "next/router";

export default function FormComponent(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const titleInputRef = useRef();
  const subtitleInputRef = useRef();
  const descriptionInputRef = useRef();
  // const StartDateInputRef = useRef();
  // const dueDateInputRef = useRef();
  const durationInHoursInputRef = useRef();
  // const timeSpentInputRef = useRef();
  const assignedToInputRef = useRef();

  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredSubtitle,
    isValid: enteredSubtitlesValid,
    hasError: subtitleInputHasError,
    valueChangeHandler: subtitleChangeHandler,
    inputBlurHandler: subtitleBlurHandler,
    reset: resetSubtitleInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredDescription,
    isValid: enteredDescriptionValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");
  // const {
  //   value: enteredStartDate,
  //   isValid: enteredStartDateValid,
  //   hasError: startDateInputHasError,
  //   valueChangeHandler: startDateChangeHandler,
  //   inputBlurHandler: startDateBlurHandler,
  //   reset: resetStartDateInput,
  // } = useInput((value) => value.trim() !== "");
  // const {
  //   value: enteredDueDate,
  //   isValid: enteredDueDateValid,
  //   hasError: dueDateInputHasError,
  //   valueChangeHandler: dueDateChangeHandler,
  //   inputBlurHandler: dueDateBlurHandler,
  //   reset: resetDueDateInput,
  // } = useInput((value) => value.trim() !== "");
  const {
    value: enteredDurationInHours,
    isValid: enteredDurationInHoursValid,
    hasError: durationInHoursInputHasError,
    valueChangeHandler: durationInHoursChangeHandler,
    inputBlurHandler: durationInHoursBlurHandler,
    reset: resetDurationInHoursInput,
  } = useInput((value) => value.trim() !== "");
  // const {
  //   value: enteredTimeSpent,
  //   isValid: enteredTimeSpentValid,
  //   hasError: timeSpentInputHasError,
  //   valueChangeHandler: timeSpentChangeHandler,
  //   inputBlurHandler: timeSpentBlurHandler,
  //   reset: resetTimeSpentInput,
  // } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAssignedTo,
    isValid: enteredAssignedToValid,
    hasError: assignedToInputHasError,
    valueChangeHandler: assignedToChangeHandler,
    inputBlurHandler: assignedToBlurHandler,
    reset: resetAssignedToInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();

    // if (!enteredTitleIsValid) {
    //   return;
    // }

    const enteredTitle = titleInputRef.current.value;
    const enteredSubtitle = subtitleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    // const enteredStartDate = startDateInputRef.current.value;
    // const enteredDueDate = dueDateInputRef.current.value;
    const enteredDurationInHours = durationInHoursInputRef.current.value;
    // const enteredTimeSpent = timeSpentInputRef.current.value;
    const enteredAssignedTo = assignedToInputRef.current.value;

    const Data = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      description: enteredDescription,
      // startDate: enteredStartDate,
      // dueDate: enteredDueDate,
      durationInHours: enteredDurationInHours,
      // timeSpent: enteredTimeSpent,
      assignedTo: enteredAssignedTo,
      id: new Date().toString + Math.random().toString(),
    };
    dispatch(dataActions.formData(Data));
    router.push("/user");

    // props.onAddData(Data);
    // resetTitleInput;
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  onChange={titleChangeHandler}
                  ref={titleInputRef}
                  onBlur={titleBlurHandler}
                  value={enteredTitle}
                  autoComplete="given-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {titleInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "1px",
                    color: "white",
                  }}
                >
                  Error!!!!!!!!!
                </p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Subtitle
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  onChange={subtitleChangeHandler}
                  ref={subtitleInputRef}
                  onBlur={subtitleBlurHandler}
                  value={enteredSubtitle}
                  autoComplete="family-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {subtitleInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "1px",
                    color: "white",
                  }}
                >
                  Error!!!!!!!!!
                </p>
              )}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={descriptionChangeHandler}
                  ref={descriptionInputRef}
                  onBlur={descriptionBlurHandler}
                  value={enteredDescription}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                details of the task
              </p>
              {descriptionInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "1px",
                    color: "white",
                  }}
                >
                  Error!!!!!!!!!
                </p>
              )}
            </div>
          </div>

          {/* <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-3">
                <DatePickers />
              </div>
            </div>
          </div> */}
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Duration in Hours
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={durationInHoursChangeHandler}
                  ref={durationInHoursInputRef}
                  onBlur={durationInHoursBlurHandler}
                  value={enteredDurationInHours}
                />
              </div>
              {durationInHoursInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "1px",
                    color: "white",
                  }}
                >
                  Error!!!!!!!!!
                </p>
              )}
            </div>
            {/* <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Time Spent
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={timeSpentChangeHandler}
                  ref={timeSpentInputRef}
                  onBlur={durationInHoursBlurHandler}
                  value={enteredTimeSpent}
                />
              </div>
              {timeSpentInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "1px",
                    color: "white",
                  }}
                >
                  Error!!!!!!!!!
                </p>
              )}
            </div> */}
            <div className="sm:col-span-2">
              <label
                htmlFor="team"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Assigned To
              </label>
              <div className="mt-2">
                <select
                  id="team"
                  name="team"
                  autoComplete="team-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={assignedToChangeHandler}
                  ref={assignedToInputRef}
                  onBlur={assignedToBlurHandler}
                  value={enteredAssignedTo}
                >
                  <option>Team 1</option>
                  <option>Team 2</option>
                  <option>Team 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
