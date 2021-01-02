import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/code-of-conduct.css"

const CodeofConductPage = () => (
  <Layout>
    <SEO title="Code of Conduct" />
    <Container className="coc-container">
      <h1>CODE OF CONDUCT</h1>
      <br></br>
      <h3>GENERAL POLICIES + GUIDELINES</h3>
      <br></br>
      <p><b>Who We Are.</b> We urge our members to not assume the pronouns of others. While many of our members use she/her, for example, some use they/them. Remember not to judge people’s gender based on their photos or names they use on Facebook.</p>
      
      <p><b>What We Mean By “Tech.”</b> Whether you have a job in tech, are seeking a job in tech, or have a job in tech that is not typically thought of as "technical" (such as marketing, business development, design, UX/UI, research, etc.), you are welcome here. This group is for you. Please be welcoming of all who join.</p>

      <p><b>This Is A Safe Space.</b> We encourage discussion of sensitive and difficult topics so that we can support each other, help each other find solutions, and problem solve together. Due to the sensitive nature of many of these discussions, please keep what is said in these spaces - whether online or in person - confidential unless you receive permission otherwise. Be especially cognizant to avoid sharing identifying information, and remember that anything you do share is seen by thousands of people. Always ask the original poster or speaker if they would feel comfortable having their post or experience shared.</p>

      <p><b>Zero Tolerance For Hateful Messages & Actions.</b> Each of our members plays a role in establishing and promoting a positive, inclusive, and encouraging community. Discussions, posts, actions, or comments that promote hatred of any kind - including, but not limited to, racism, sexism, transphobia, homophobia, biphobia, queerphobia, ableism, and ageism - are not acceptable in Haitians in Tech™ spaces and may result in you being removed from online or in-person spaces.</p>

      <p><b>Trust Intent, Name Impact.</b> Trust that everyone in this group has each other's best interests at heart; but if someone says something incorrect or hurtful, name what impact that has. Report hateful or violent posts, comments, discussions, or actions to admin. See more details on that process below.</p>

      <p><b>Make Space, Take Space.</b> Speak up and have your voice heard, but also be cognizant of how much space you're occupying and take a step back when needed. Let people of different backgrounds tell their stories and experiences. We have a lot to learn from each other!</p>

      <p><b>Value Each Other!</b> Many members of this community spend their precious and valuable time to give each other guidance, advice, introductions, etc. If someone does this for you, acknowledge their comments, take time to write back thank you to their private messages, and pay it forward when you can.</p>


      <h4>POLICIES FOR ONLINE Haitians in Tech™ SPACES</h4>
      <p><b>To preserve positivity and inclusivity, our online spaces are moderated.</b> All posts will be approved before being available to the group. See all of our guidelines for Facebook posts here.</p>

      <p><b>As a reminder, while we have several admins for our Haitians in Tech™ online spaces, we can't read every exchange.</b> If you see anything that you believe breaks our community guidelines, please reach out to team@haitiansintech.com with screenshots of the post and a link to the post or comments.</p>

      <p><b>We take every report of hatred, violence, and harassment seriously and we prioritize working with those affected to determine what the next steps should be.</b> If someone is found to have broken the Haitians in Tech™ code of conduct, they will be removed from the group.</p>

      <p><b>If a member promotes violence or hatred, an admin will warn them about their behavior.</b> Ideally, we want that person to recognize the impact of their actions and follow that up with clear behavioral changes. If there is a second strike, we will remove that person from our community. Certain egregious violations - such as threatening harm toward another member or harassing another member - may result in removal without a warning. The admins reserve the right to make that judgement without discussion if needed.</p>

      <p><b>As explained in more detail in our Facebook posts guidelines, members use the #DISCUSS tag to share an interesting article related to tech.</b> This tag underscores the value we hold toward thoughtful discussions. We also recognize that we will often disagree. Disagreements turn into violations of our code of conduct when they target a member or members for their viewpoints or identity or encourage discrimination, harassment, or other forms of violence.</p>

      <h4>POLICIES FOR IN-PERSON GATHERINGS</h4>
      <p><b>We follow the same guidelines for our in person gatherings that we do for our online communities.</b> If a member promotes violence or hatred, an admin will warn them about their behavior. Ideally, we want that person to recognize the impact of their actions and follow that up with clear behavioral changes. If there is a second strike, we will remove that person from our community. Certain egregious violations - such as threatening harm toward another member or harassing another member - may result in removal without a warning. The admins reserve the right to make that judgement without discussion if needed.</p>

      <p><b>Respect an individual’s spaces, whether you know them or not.</b> Always ask for permission before touching someone, taking their photo, or filming them.</p>

      <p><b>Consent one time is not consent every time.</b> Ask each time you’d like to film, photograph, or touch someone.</p>

      <p><b>When consuming alcohol, remember that being drunk is never an excuse for hurtful, abusive, or harassing behavior.</b> Never pressure someone to indulge in alcohol.</p>

      <p><b>A person who is inebriated cannot consent to sexual behavior.</b></p>

      <p>If you have witnessed someone violating any of the above policies, or if you think that someone’s behavior is dangerous, harassing, or otherwise a threat to the anyone in the community, reach out to team@haitiansintech.com.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default CodeofConductPage
