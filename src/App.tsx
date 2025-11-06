import { ExampleForm } from "./components/example-form";
import { Toaster } from "./components/ui/sonner";

function App() {
  import.meta.env.BASE_URL;
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ExampleForm />
      <Toaster />
    </div>
  );
}

export default App;
