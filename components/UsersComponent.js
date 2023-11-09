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
    <ul role="list" className="mt-10 divide-y divide-gray-100 border-b border-gray-900/10 pb-1">
      <li key={id} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-6">
          <div className="min-w-0 flex-auto">
            <p className="text-lg font-semibold leading-8 text-gray-900">
              <span className="text-2xl leading-6 text-gray-900">{title}</span>
            </p>
            <p className="text-lg font-semibold leading-6 text-gray-900">
              Subtitle:{" "}
              <span className="text- leading-6 text-gray-500">{subtitle}</span>
            </p>

            <p className="text-lg font-semibold leading-6 text-gray-900">
              Description:{" "}
            </p>
            <p className="text-sm leading-6 text-gray-500 max-w-xl">
              {description}
            </p>
          </div>
        </div>
        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Duration in Hours:{" "}
            <span className="text-lg leading-6 text-gray-500">
              {durationInHours}
            </span>
          </p>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Assigned To:{" "}
            <span className="text-lg leading-6 text-gray-500">
              {assignedTo}
            </span>
          </p>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Start Date:{" "}
            <span className="text-lg leading-6 text-gray-500">{startDate}</span>
          </p>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Due Date:{" "}
            <span className="text-lg leading-6 text-gray-500">{dueDate}</span>
          </p>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Time Spent:{" "}
            <span className="text-lg leading-6 text-gray-500">{timeSpent}</span>
          </p>
        </div>
      </li>
    </ul>
  );
}
