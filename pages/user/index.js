import UsersComponent from "@/components/UsersComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Users = () => {
  const newData = useSelector((state) => state.data.theData);
  const router = useRouter();

  useEffect(() => {
    if (newData.length === 0) {
      router.push("/form");
    }
  }, [newData, router]);

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
    </div>
  );
};

export default Users;
