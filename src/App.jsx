import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import "./Fonts/Lavish.ttf";
import ScrollToTop from "./hooks/ScrollOnTop";
const HomePage = lazy(() => import("./containers/HomePage"));
const Page404 = lazy(() => import("./containers/404page"));
const DesignerPage = lazy(() => import("./containers/Designers"));
const ProductsPage = lazy(() => import("./containers/Products"));
const LoadingComponent = lazy(() => import("./components/LoadingComponent"));
const FabricPage = lazy(() => import("./containers/FabricPage"));
const FactoryPage = lazy(() => import("./containers/FactoryPage"));
const AccessoriesPage = lazy(() => import("./containers/AccessoriesPage"));
const PrivacyPolicy = lazy(() => import("./containers/privacyPolicyPage"));

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"],
    fontWeightBold: "bolder",
  },
  ListItem: {},
});

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <Suspense fallback={<LoadingComponent />}>
            <Fragment>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/be-our-partner/Designer"
                  element={<DesignerPage />}
                />
                <Route path="/be-our-partner/Fabric" element={<FabricPage />} />
                <Route
                  path="/be-our-partner/Factory"
                  element={<FactoryPage />}
                />
                <Route
                  path="/be-our-partner/Accessories"
                  element={<AccessoriesPage />}
                />
                <Route path="/products/:id" element={<ProductsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Fragment>
          </Suspense>
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
};
