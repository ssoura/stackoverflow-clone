import { Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./context/auth";
import { useStateContext } from "./context/state";

import customTheme from "./styles/customTheme";
import { useBodyStyles } from "./styles/muiStyles";
import { Paper, Container, Grid } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import ToastNotification from "./components/ToastNotification";
import NavMenuDesktop from "./components/NavMenuDesktop";
import RightSidePanel from "./components/RightSidePanel";

import QuesListPage from "./pages/QuesListPage";
import AllTagsPage from "./pages/AllTagsPage";
import AllUsersPage from "./pages/AllUsersPage";
import QuestionPage from "./pages/QuestionPage";
import AskQuestionPage from "./pages/AskQuestionPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const { user } = useAuthContext();
  const { darkMode } = useStateContext();
  const classes = useBodyStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme(darkMode)}>
        <Paper className={classes.root} elevation={0}>
          <ToastNotification />
          <NavBar />
          <Container disableGutters>
            <Grid
              container
              direction="row"
              wrap="nowrap"
              justifyContent="space-between"
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <NavMenuDesktop />
                      <QuesListPage />
                      <RightSidePanel />
                    </>
                  }
                />

                <Route
                  path="/ask"
                  element={
                    user ? (
                      <>
                        <NavMenuDesktop />
                        <AskQuestionPage />
                        <RightSidePanel />
                      </>
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/tags"
                  element={
                    <>
                      <NavMenuDesktop />
                      <AllTagsPage />
                    </>
                  }
                />

                <Route
                  path="/users"
                  element={
                    <>
                      <NavMenuDesktop />
                      <AllUsersPage />
                    </>
                  }
                />

                <Route
                  path="/user/:username"
                  element={
                    <>
                      <NavMenuDesktop />
                      <UserPage />
                    </>
                  }
                />

                <Route
                  path="/questions/:quesId"
                  element={
                    <>
                      <NavMenuDesktop />
                      <QuestionPage />
                    </>
                  }
                />

                <Route
                  exact
                  path="/tags/:tagName"
                  element={
                    <>
                      {" "}
                      <NavMenuDesktop />
                      <QuesListPage tagFilterActive={true} />
                      <RightSidePanel />
                    </>
                  }
                />

                <Route
                  path="/search/:query"
                  element={
                    <>
                      {" "}
                      <NavMenuDesktop />
                      <QuesListPage searchFilterActive={true} />
                      <RightSidePanel />
                    </>
                  }
                />

                <Route
                  element={
                    <>
                      <NavMenuDesktop />
                      <NotFoundPage />
                      <RightSidePanel />
                    </>
                  }
                />
              </Routes>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
