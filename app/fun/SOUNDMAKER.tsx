import Grid from '@mui/material/Grid';
import styles from './page.module.css'

export default function Project4() {

  return (
    <div className={styles.root}>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, sm: 6}}>
          <h1>Sound Maker</h1>
          <p className={styles.color}>This is a collaborative class project using web audio api. Originally built as a C# .NET ASP Core MVC project but then later turned into a JS project. Both can be found below. The original intent of building it in the .NET ASP framework was to add the functionality where a user can "save" their effects to a db using MySQL. Unfortunatly we ran out of time. Some cool things about this project was making the effects from scratch. Check out the code, we made a modular synth out of JS code.</p>
          <p><a href='https://github.com/Sofacosta/SoundMaker.Solution' target="_blank" rel="noreferrer">Link to GitHub page</a></p>
          <p><a href='https://jessecallahan.github.io/SoundmakerJS/' target="_blank" rel="noreferrer">Link to JS Version</a></p>
        </Grid>
        <Grid sx={{ 
          pt: 6,
    }} size={{ xs: 12, sm: 4}}>
          <div>
            <a href='https://jessecallahan.github.io/SoundmakerJS/' target="_blank" rel="noreferrer">
            <img style={{maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px'}}
            className={styles.img} alt="chat website" src={'./images/soundmaker.png'} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}