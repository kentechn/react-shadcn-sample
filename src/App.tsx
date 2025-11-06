import { ExampleForm } from "./components/example-form";
import { RootLayout } from "./components/layouts/root-layout";

function App() {
  import.meta.env.BASE_URL;
  return (
    <RootLayout>
      <ExampleForm />
    </RootLayout>
  );
}

export default App;
