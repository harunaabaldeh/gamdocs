import Layout from './components/Layout/index';
import Card from "./components/Card/index"
import Grid from '@mui/material/Grid'
function App() {
  return (
    <Layout>
      <Grid container spacing={2} mt={2}>
          <Grid item xs={4} >
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
        </Grid>
    </Layout>
  );
}

export default App;
