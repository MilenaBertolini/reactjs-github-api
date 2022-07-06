import React from "react";
import Layout from "./Components/layout";
import Search from "./Components/search";
import Profile from "./Components/profile";
import Repositories from "./Components/repositories";
import useGithub from "./hooks/git-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <Search />
      )}
    </Layout>
  );
};

export default App;
