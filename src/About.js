import css from './sass/about.module.scss'

function About() {
  return (
    <div className={css.about}>
      <img src="/ami-profile.jpg" alt="Ami Jenner" className={css.img}/>
      <div className={css.copy}>
        <p>The art of story telling through visual communication is something I am most passionate about.  I am organized and efficient, a great communicator, and enjoy being in the collaborative spirit.</p>
        <p>Los Angeles based with over 12 years of experience in the Creative Services world.</p>
        <p className={css.callout}>Let's work together!</p>
        <address>
          Email: <a href="mailto:amijennercreative@gmail.com">amijennercreative@gmail.com</a>
        </address>
      </div>
    </div>
  )
}

export default About