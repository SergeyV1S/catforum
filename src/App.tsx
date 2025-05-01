import appStyles from "./app.module.css";
import { Button, Card, CardContent, CardHeader, Checkbox, Typography } from "./components";
import { useCatCard } from "./hooks";

export const App = () => {
  const { request, refresh } = useCatCard();

  return (
    <div className={appStyles.wrapper}>
      <Card>
        <CardHeader className={appStyles.settings}>
          <div className={appStyles.checkbox_with_text}>
            <Checkbox
              id='enabled'
              checked={refresh.canRefresh}
              onChange={() => refresh.toggleCanRefresh()}
              disabled={refresh.autoRefresh}
            />
            <label htmlFor='enabled'>Enabled</label>
          </div>
          <div className={appStyles.checkbox_with_text}>
            <Checkbox
              id='refresh'
              checked={refresh.autoRefresh}
              onChange={() => refresh.toggleAutoRefresh()}
            />
            <label htmlFor='refresh'>Auto-refresh every 5 second</label>
          </div>
          <Button
            onClick={refresh.refetch}
            disabled={!refresh.canRefresh || refresh.autoRefresh || request.isLoading}
          >
            Get cat
          </Button>
        </CardHeader>
        <CardContent>
          {request.data && (
            <img
              className={appStyles.cat_image}
              src={request.data[0].url}
              alt={request.data[0].id}
            />
          )}
          {request.error && <Typography variant='error'>{request.error}</Typography>}
        </CardContent>
      </Card>
    </div>
  );
};
