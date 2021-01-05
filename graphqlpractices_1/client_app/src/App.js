import client from "./config/gql_config";

import { ApolloProvider } from "@apollo/client";
import Student from "./components/Student";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <h2>My first Apollo app 🚀</h2> */}
        <Student />
      </div>
    </ApolloProvider>
  );
}

export default App;
