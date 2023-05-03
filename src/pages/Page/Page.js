import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles";
import Wrapper from "../../components/Wrapper";
import MyBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CurrentlyFeatured from "../../components/CurentlyFeautured/CurrentlyFeatured";
import AllCategories from "../../components/AllCategories";
import SelectOrder from "../../components/SelectOrder";

const Page = () => {
  return (
    <Box sx={{ pt: "90px" }}>
      <Wrapper>
        <Box>
          <Typography variant="h1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <MyBreadcrumbs />
          <CurrentlyFeatured />
        </Box>
        <Box sx={styles.wrapper}>
          <AllCategories />
          <SelectOrder />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Page;
