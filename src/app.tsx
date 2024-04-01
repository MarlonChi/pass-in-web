import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export const App = () => {
  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  );
};
