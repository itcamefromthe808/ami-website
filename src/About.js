import css from './sass/about.module.scss'

function About() {
  return (
    <div className={css.about}>
      <img src="/ami-profile.jpg" alt="Ami Jenner"/>
      <p>The art of story telling through visual communication is something I am most passionate about.  I am organized and efficient, a great communicator, and enjoy being in the collaborative spirit.</p>
      <p>Los Angeles based with over 12 years of experience in the Creative Services world.</p>
      <p>Let's work together!</p>
      <address>email: <a href="mailto:amijennercreative@gmail.com">amijennercreative@gmail.com</a></address>
    </div>
  )
}

export default About