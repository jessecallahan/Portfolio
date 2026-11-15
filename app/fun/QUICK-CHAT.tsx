import Grid from '@mui/material/Grid';
import styles from './page.module.css'

export default function Project3() {
  return (
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, md: 4}}>
          <h1>Quick Chat</h1>
          <p className={styles.color}>A quick and easy way to chat with your friends. It uses React, Redux, Firestore, Firebase, React-Router. I made the art using sketchbook on a tablet. Check out the github to see how it works -- for people interested in using it -- go to the website sign up and invite a friend to one of your chat rooms.</p>
          <p><a href='https://jessecallahan.github.io/quick_chat/#/' target="_blank" rel="noreferrer">Quick Chat</a></p>
          <p><a href='https://github.com/jessecallahan/quick_chat' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid size={{ xs: 12, md: 8}} sx={{ pt: 4 }}>
          <div >
            <a href='https://jessecallahan.github.io/quick_chat/#/' target="_blank" rel="noreferrer"><img className={styles.img} alt="chat" src={'./images/chatpic.png'} /></a>
          </div>
        </Grid>
      </Grid>
  );
}