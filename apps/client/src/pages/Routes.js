import {
  Routes as Routes2,
  Route,
  Navigate,
} from "react-router-dom";
import NavMenuDesktop from "../components/NavMenuDesktop";
import RightSidePanel from "../components/RightSidePanel";
import QuesListPage from "./QuesListPage";
import AllTagsPage from "./AllTagsPage";
import AllUsersPage from "./AllUsersPage";
import QuestionPage from "./QuestionPage";
import AskQuestionPage from "./AskQuestionPage";
import UserPage from "./UserPage";
import NotFoundPage from "./NotFoundPage";
import { useAuthContext } from "../context/auth";

import { Container, Grid } from "@mui/material";

const Routes = () => {
  const { user } = useAuthContext();

  return (
    <Container disableGutters>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justifyContent="space-between"
      >
        <Routes2>
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

          {/* <Route exact path="/ask">
              {user ? (
                <>
                  <NavMenuDesktop />
                  <AskQuestionPage />
                  <RightSidePanel />
                </>
              ) : (
                <Redirect to="/" />
              )}
            </Route> */}

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
        </Routes2>
      </Grid>
    </Container>
  );
};

export default Routes;
