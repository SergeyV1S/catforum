import appStyles from "./app.module.css";
import { useCatCard } from "./hooks";

export const App = () => {
  const { data } = useCatCard();
  console.log(data);

  return (
    <div className={appStyles.wrapper}>
      <div className=''>f</div>
    </div>
  );
};
