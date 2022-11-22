import {
  type ParentComponent,
  Switch,
  Match,
  createResource,
  createEffect,
} from "solid-js";
import { Title } from "solid-start";

const Home: ParentComponent = () => {
  const [res] = createResource(() =>
    fetch("/api/notes").then((res) => res.json())
  );

  createEffect(() => {
    console.log({ loading: res.loading, res: res() });
  });

  return (
    <>
      <Title>Home</Title>
      <div>
        <Switch
          fallback={
            <div class="font-bold text-2xl text-gray-500">Loading...</div>
          }
        >
          <Match when={!res.loading}>
            <pre class="font-bold text-2xl text-gray-500">
              {JSON.stringify(res(), null, 2)}
            </pre>
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default Home;
