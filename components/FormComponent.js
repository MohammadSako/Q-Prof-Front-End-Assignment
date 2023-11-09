import useInput from "../components/layouts/use-input";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { useRouter } from "next/router";
import { getFormattedDate } from "../util/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormComponent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const startedDate = getFormattedDate(startDate);
  const endedDate = getFormattedDate(endDate);

  const titleInputRef = useRef();
  const subtitleInputRef = useRef();
  const descriptionInputRef = useRef();
  const durationInHoursInputRef = useRef();
  const assignedToInputRef = useRef();
  const timeSpentInputRef = useRef();

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
  const {
    value: enteredDurationInHours,
    isValid: enteredDurationInHoursValid,
    hasError: durationInHoursInputHasError,
    valueChangeHandler: durationInHoursChangeHandler,
    inputBlurHandler: durationInHoursBlurHandler,
    reset: resetDurationInHoursInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAssignedTo,
    isValid: enteredAssignedToValid,
    hasError: assignedToInputHasError,
    valueChangeHandler: assignedToChangeHandler,
    inputBlurHandler: assignedToBlurHandler,
    reset: resetAssignedToInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredTimeSpent,
    isValid: enteredTimeSpentValid,
    hasError: timeSpentInputHasError,
    valueChangeHandler: timeSpentChangeHandler,
    inputBlurHandler: timeSpentBlurHandler,
    reset: resetTimeSpentInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredTitleIsValid &&
      !enteredSubtitlesValid &&
      !enteredDescriptionValid &&
      !enteredDurationInHoursValid &&
      !enteredAssignedToValid &&
      !enteredTimeSpentValid
    ) {
      return;
    }

    const enteredTitle = titleInputRef.current.value;
    const enteredSubtitle = subtitleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredStartDate = startedDate;
    const enteredDueDate = endedDate;
    const enteredDurationInHours = durationInHoursInputRef.current.value;
    const enteredTimeSpent = timeSpentInputRef.current.value;
    const enteredAssignedTo = assignedToInputRef.current.value;

    const Data = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      description: enteredDescription,
      startDate: enteredStartDate,
      dueDate: enteredDueDate,
      durationInHours: enteredDurationInHours,
      timeSpent: enteredTimeSpent,
      assignedTo: enteredAssignedTo,
      id: new Date().toString + Math.random().toString(),
    };
    dispatch(dataActions.formData(Data));
    router.push("/user");
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
                  minLength={3}
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
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Enter a valid Title
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
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Enter a valid subtitle
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
                  maxLength={150}
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
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Enter a valid description
                </p>
              )}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start Date
              </label>
              <div className="mt-2 p-1 rounded border   border-gray-300   ">
                <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Due Date
              </label>
              <div className="mt-2 p-1 rounded border border-gray-300">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Duration in Hours
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="first-name"
                  id="first-name"
                  min={1}
                  max={30}
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
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Enter a valid number
                </p>
              )}
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Time Spent
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  min={1}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={timeSpentChangeHandler}
                  ref={timeSpentInputRef}
                  onBlur={timeSpentBlurHandler}
                  value={enteredTimeSpent}
                />
              </div>
              {timeSpentInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Enter a valid number
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
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
                  <option></option>
                  <option>Team 1</option>
                  <option>Team 2</option>
                  <option>Team 3</option>
                </select>
              </div>
              {assignedToInputHasError && (
                <p
                  className="error-text"
                  style={{
                    backgroundColor: "rgb(255 0 0)",
                    borderRadius: "5px",
                    padding: "7px",
                    marginTop: "3px",
                    color: "white",
                  }}
                >
                  Select a team that assigned the task to.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-900/10 pb-12 mt-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className="mt-5 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
