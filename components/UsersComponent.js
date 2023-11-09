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
    <ul role="list" className="divide-y divide-gray-100">
      <li key={id} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-lg font-semibold leading-6 text-gray-900">
              Title: {title}
            </p>
            <p className=" text-lg mt-1 truncate text-xs leading-5 text-gray-500">
              Subtitle: {subtitle}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{description}</p>
          {title ? (
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Last seen <time dateTime={title}>{title}</time>
            </p>
          ) : (
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Online</p>
            </div>
          )}
        </div>
      </li>
    </ul>
  );
}
