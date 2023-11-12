export default function UsersComponent(props) {
  const {
    title,
    subtitle,
    description,
    id,
    startDate,
    dueDate,
    durationInHours,
    timeSpent,
    assignedTo,
  } = props.data;

  return (
    <div className="mt-10 lg:mx-auto shadow-2xl p-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-base font-sembold  text-2xl leading-7 text-gray-900">
          {title}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-xl leading-6 text-gray-500 ">
          {subtitle}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Start Date
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {startDate}
            </dd>
          </div>
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Due Date
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {dueDate}
            </dd>
          </div>
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Duration in Hours
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {durationInHours} Hr/s
            </dd>
          </div>
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Time Spent
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {timeSpent}
            </dd>
          </div>
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {description}
            </dd>
          </div>
          <div className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Assigned To
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {assignedTo}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
