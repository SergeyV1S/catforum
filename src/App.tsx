import appStyles from "./app.module.css";
import { Button, Card, CardContent, CardHeader, Checkbox } from "./components";
import { useCatCard } from "./hooks";

export const App = () => {
  const { data } = useCatCard();
  console.log(data);

  return (
    <div className={appStyles.wrapper}>
      <Card>
        <CardHeader className={appStyles.settings}>
          <div className={appStyles.checkbox_with_text}>
            <Checkbox id='enabled' />
            <label htmlFor='enabled'>Enabled</label>
          </div>
          <div className={appStyles.checkbox_with_text}>
            <Checkbox id='refrash' />
            <label htmlFor='refrash'>Auto-refrash every 5 second</label>
          </div>
          <Button>Get cat</Button>
        </CardHeader>
        <CardContent>
          {data && <img className={appStyles.cat_image} src={data[0].url} alt={data[0].id} />}
        </CardContent>
      </Card>
    </div>
  );
};
