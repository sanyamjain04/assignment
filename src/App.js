import Form from "./components/Form";
import Loading from "./components/Loading";
import useFetchUserData from "./hooks/useFetchUserData";

export default function App() {
  const { data, error, loading } = useFetchUserData(
    "https://sanyamresponsestatusapi.sanyam04.repl.co/data"
  );

  const localData = JSON.parse(localStorage.getItem("userData"));
  const userData = localData !== null ? localData : data;
  if (error) throw new Error(error);
  if (loading) return <Loading />;

  return (
    <main className="w-screen h-screen">
      <Form userData={userData} />
    </main>
  );
}
