import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { user } = useTelegram();
  return <div className="App">Yo!{user?.username}</div>;
};
