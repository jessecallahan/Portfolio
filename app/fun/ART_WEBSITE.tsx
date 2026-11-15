import Grid from '@mui/material/Grid';
import styles from './page.module.css'

export default function Project1() {

  return (
 
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, md: 6}}>
          <h1>Art Website</h1>
          <p className={styles.color}>This is a website for my Dad who is a visual artist. We used the very cool <a href='https://github.com/neptunian/react-photo-gallery' target="_blank" rel="noreferrer">react-photo-gallery</a> dependency to display his art and React Bootstrap to handle the other stuff. We also used the Flickr Api to populate our gallery. He uploads his work to his Flickr account and his site automatically updates with the new work. Enjoy!</p>
          <p><a href='https://jessecallahan.github.io/mikes-art-website/' target="_blank" rel="noreferrer">Link to Art Site</a></p>
          <p><a href='https://github.com/jessecallahan/mikes-art-website' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ pt: 4 }}>
          <div >
            <a href='https://jessecallahan.github.io/mikes-art-website/' target="_blank" rel="noreferrer"><img className={styles.img} alt="art" src={'./images/artpic.jpg'} /></a>
          </div>
        </Grid>
      </Grid>

  );
}