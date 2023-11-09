import UsersComponent from "@/components/UsersComponent";
import { useSelector } from "react-redux";

const Users = () => {
  const newData = useSelector((state) => state.data.theData);
  console.log(newData);
  return (
    <div className="container mx-auto">
      {newData.map((data) => (
        <UsersComponent
          key={data.id}
          data={{
            id: data.id,
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            startDate: data.startDate,
            dueDate: data.dueDate,
            durationInHours: data.durationInHours,
            timeSpent: data.timeSpent,
            assignedTo: data.assignedTo,
          }}
        />
      ))}
      {/* <UsersComponent data={newData} /> */}
    </div>
  );
};

export default Users;
