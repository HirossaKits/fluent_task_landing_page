import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { ListItem } from '../listitem/ListItem';
import Link from 'next/link';

const VerticalFeatures = () => (
  <Section
    title="Configuration of the application"
    description="The following is a rough configuration of my application."
  >
    <VerticalFeatureRow
      title="Front End"
      description="Using the following language and libraries."
      image="/assets/images/frontend.svg"
      imageAlt="First feature alt text"
    >
      <div className="mt-5 ml-32">
        <ListItem
          img={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          }
          label="Typescript"
        />
        <ListItem
          img={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
          }
          label="React"
        />
        <ListItem
          img="https://cdn.worldvectorlogo.com/logos/create-react-app.svg"
          label="Create React App"
        />
        <ListItem
          img="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/redux.png"
          label="Redux"
        />
        <ListItem img="https://mui.com/static/logo.png" label="Material-UI" />
        <ListItem
          img="https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/350dd/emotion.webp"
          label="Emotion"
        />
      </div>
    </VerticalFeatureRow>
    <VerticalFeatureRow
      title="Back End"
      description="Using the following language and framework."
      image="/assets/images/backend.svg"
      imageAlt="Second feature alt text"
      reverse
    >
      <div className="mt-5 ml-32">
        <ListItem
          img={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          }
          label="Typescript"
        />
        <ListItem
          img="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
          label="Fastify"
        />
        <ListItem img="../../assets/images/logo/prisma.png" label="Prisma" />
      </div>
    </VerticalFeatureRow>
    <VerticalFeatureRow
      title="Infrastructure"
      description="Deployed on AWS using Amazon ECS."
      image="/assets/images/AWS.svg"
      imageAlt="Third feature alt text"
    >
      <Link href="../../assets/images/AWS.svg">
        <a className="text-xl text-primary-600 underline underline-offset-0">
          AWS Architecture Diagram
        </a>
      </Link>
    </VerticalFeatureRow>
    <video controls muted>
      {/* <source src={video_mp4} type="video/mp4" /> */}
      <p>Your browser doesn't support HTML5 video.</p>
    </video>
  </Section>
);

export { VerticalFeatures };
